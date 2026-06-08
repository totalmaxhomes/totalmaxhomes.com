#!/usr/bin/env python3
"""
WeChat Article → Blog Markdown Converter
Usage: python3 scripts/wechat-to-blog.py <wechat_url>
"""

import sys
import re
import os
import subprocess
import urllib.request
from datetime import datetime

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG_DIR     = os.path.join(PROJECT_ROOT, "content", "blog")
PUBLIC_DIR   = os.path.join(PROJECT_ROOT, "public")

CURL_HEADERS = [
    "-H", "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "-H", "Accept-Language: en-US,en;q=0.9",
]

# ── helpers ──────────────────────────────────────────────────────────────────

def fetch_html(url: str) -> str:
    result = subprocess.run(
        ["curl", "-s", "-L", *CURL_HEADERS, url],
        capture_output=True, text=True, timeout=30
    )
    return result.stdout


def strip_tags(html: str) -> str:
    text = re.sub(r"<[^>]+>", " ", html)
    text = text.replace("&nbsp;", " ").replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">").replace("&quot;", '"').replace("&#39;", "'")
    return re.sub(r"\s+", " ", text).strip()


def to_slug(title: str) -> str:
    slug = title.lower()
    slug = re.sub(r"[^a-z0-9\s-]", "", slug)
    slug = re.sub(r"\s+", "-", slug.strip())
    slug = re.sub(r"-+", "-", slug)
    return slug[:80].strip("-")


def parse_chinese_date(raw: str) -> str:
    """'2024年10月20日 09:31'  →  '2024-10-20'"""
    m = re.search(r"(\d{4})年(\d{1,2})月(\d{1,2})日", raw)
    if m:
        y, mo, d = m.groups()
        return f"{y}-{mo.zfill(2)}-{d.zfill(2)}"
    # fallback: today
    return datetime.today().strftime("%Y-%m-%d")


def download_image(img_url: str, filename: str) -> str:
    """Download image to public/ and return local path."""
    dest = os.path.join(PUBLIC_DIR, filename)
    try:
        subprocess.run(
            ["curl", "-s", "-L", *CURL_HEADERS, img_url, "-o", dest],
            timeout=30, check=True
        )
        size = os.path.getsize(dest)
        if size > 1000:
            print(f"  ✓ image saved → public/{filename}  ({size//1024}KB)")
            return f"/{filename}"
    except Exception as e:
        print(f"  ✗ image download failed: {e}")
    return img_url  # fallback to external URL


def clean_img_url(raw: str) -> str:
    """Strip WeChat tracking params, keep base URL."""
    url = raw.split("#imgIndex")[0]
    url = re.sub(r"&tp=webp.*", "", url)
    url = re.sub(r"&wxfrom.*", "", url)
    url = re.sub(r"&wx_lazy.*", "", url)
    return url

# ── main parser ───────────────────────────────────────────────────────────────

def parse_wechat(html: str) -> dict:
    # title
    title = ""
    for pat in [
        r'class="js_title_inner"[^>]*>(.*?)</span>',
        r'id="activity-name"[^>]*>\s*<span[^>]*>(.*?)</span>',
        r'<title>(.*?)</title>',
    ]:
        m = re.search(pat, html, re.DOTALL)
        if m:
            title = strip_tags(m.group(1)).strip()
            if title:
                break

    # date
    date_raw = ""
    m = re.search(r'id="publish_time"[^>]*>(.*?)</em>', html, re.DOTALL)
    if m:
        date_raw = m.group(1).strip()
    date = parse_chinese_date(date_raw) if date_raw else datetime.today().strftime("%Y-%m-%d")

    # content block
    content_match = re.search(
        r'id="js_content"[^>]*>(.*?)(?:id="js_content_copyright"|</div>\s*<script)',
        html, re.DOTALL
    )
    raw_content = content_match.group(1) if content_match else html

    # all images (data-src attr, skip tiny gifs/icons)
    all_imgs = []
    for m in re.finditer(r'data-src="(https://[^"]+mmbiz[^"]+)"', raw_content):
        url = clean_img_url(m.group(1))
        fmt = m.group(1)
        # skip tiny decoration gifs/icons
        w = re.search(r'data-w="(\d+)"', raw_content[max(0, m.start()-200):m.start()+200])
        if w and int(w.group(1)) < 100:
            continue
        if "gif" in fmt and "mmbiz_gif" in fmt:
            continue
        if url not in all_imgs:
            all_imgs.append(url)

    # build markdown body from content
    lines = []
    last_h2 = None

    # split by paragraph/section tags
    segments = re.split(r'<(?:section|p|div|ul|ol|li|h[1-6]|blockquote)(?:\s[^>]*)?>|</(?:section|p|div|ul|ol|li|h[1-6]|blockquote)>', raw_content)

    for seg in segments:
        seg = seg.strip()
        if not seg:
            continue

        # image
        img_m = re.search(r'data-src="(https://[^"]+mmbiz[^"]+)"', seg)
        if img_m:
            url = clean_img_url(img_m.group(1))
            # skip tiny icons/gifs
            w = re.search(r'data-w="(\d+)"', seg)
            if w and int(w.group(1)) < 100:
                continue
            if "mmbiz_gif" in url:
                continue
            if url in all_imgs:
                lines.append(f"\n![Image]({url})\n")
            continue

        text = strip_tags(seg)
        if not text or len(text) < 3:
            continue

        # bold heading-like text (numbered sections)
        strong_m = re.search(r'<strong[^>]*>(.*?)</strong>', seg, re.DOTALL)
        if strong_m and len(strip_tags(strong_m.group(1))) > 4:
            heading_text = strip_tags(strong_m.group(1))
            # detect numbered section headings
            if re.match(r'^\d+[^\w]', heading_text) or len(heading_text) < 60:
                # check if this looks like a section title
                if re.search(r'(Mansion|Tip|Safety|Experience|Secure|Aware|Avoid|Follow|Practice|Stay|Familiar|Conference|Concert|National|Brad|Lenny)', heading_text):
                    if heading_text != last_h2:
                        lines.append(f"\n## {heading_text}\n")
                        last_h2 = heading_text
                    continue

        # list item
        if re.search(r'<li', seg):
            items = re.findall(r'<li[^>]*>(.*?)</li>', seg, re.DOTALL)
            for item in items:
                item_text = strip_tags(item)
                if item_text:
                    lines.append(f"- {item_text}")
            continue

        # normal paragraph
        if text:
            lines.append(f"\n{text}\n")

    body = "\n".join(lines)
    # collapse excessive blank lines
    body = re.sub(r"\n{3,}", "\n\n", body)

    return {
        "title": title,
        "date": date,
        "all_imgs": all_imgs,
        "body": body.strip(),
    }


def build_markdown(data: dict, slug: str, featured_local: str, excerpt: str) -> str:
    def safe(s: str) -> str:
        return s.replace('"', "'").replace('\n', ' ').strip()

    fm = f"""---
title: "{safe(data['title'])}"
date: "{data['date']}"
excerpt: "{safe(excerpt)}"
featuredImage: "{featured_local}"
featuredImageAlt: "{safe(data['title'])}"
---

"""
    return fm + data["body"]


# ── entry point ───────────────────────────────────────────────────────────────

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/wechat-to-blog.py <url>")
        sys.exit(1)

    url = sys.argv[1]
    print(f"\n📥  Fetching: {url}")
    html = fetch_html(url)

    if len(html) < 5000:
        print("❌  HTML too short — WeChat may be blocking. Try pasting the HTML manually.")
        sys.exit(1)

    print("🔍  Parsing article...")
    data = parse_wechat(html)

    if not data["title"]:
        print("❌  Could not extract title.")
        sys.exit(1)

    print(f"📝  Title  : {data['title']}")
    print(f"📅  Date   : {data['date']}")
    print(f"🖼️   Images : {len(data['all_imgs'])} found")

    slug = to_slug(data["title"])
    print(f"🔗  Slug   : {slug}")

    # download featured image (first content image)
    featured_local = data["all_imgs"][0] if data["all_imgs"] else "/Blog.jpg"
    if data["all_imgs"]:
        ext = "jpg" if "jpeg" in data["all_imgs"][0] or "jpg" in data["all_imgs"][0] else "png"
        img_filename = f"{slug}.{ext}"
        print(f"\n⬇️   Downloading featured image...")
        featured_local = download_image(data["all_imgs"][0], img_filename)

    # auto excerpt: first 180 chars of body text
    plain = re.sub(r"\n+", " ", data["body"])
    plain = re.sub(r"!\[.*?\]\(.*?\)", "", plain)
    plain = re.sub(r"#+\s*", "", plain)
    excerpt = plain.strip()[:180].rstrip(",. ") + "."

    md = build_markdown(data, slug, featured_local, excerpt)

    out_path = os.path.join(BLOG_DIR, f"{slug}.md")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(md)

    print(f"\n✅  Done! → content/blog/{slug}.md")
    print(f"   URL will be: /blog/{slug}")
    print(f"\n💡  Review the file and adjust headings/formatting if needed.")


if __name__ == "__main__":
    main()
