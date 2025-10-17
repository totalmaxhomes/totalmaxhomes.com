import { MetadataRoute } from 'next'
import { blogs } from '@/data/blogs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.totalmaxhomes.com'

  const staticPages = [
    '',
    '/about-us',
    '/blogs',
    '/contact-us',
    '/mansions',
    '/privacy-policy',
    '/solutions',
    '/testimonials',
    '/cc',
    '/dd',
    '/ee',
    '/oo',
    '/rr',
    '/uu',
  ]

  const blogPages = blogs.map((blog) => `/blog/${blog.slug}`)

  const allPages = [...staticPages, ...blogPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}