const fs = require('fs');
const path = require('path');
const https = require('https');

const baseUrl = 'https://totalmaxhomes.wpenginepowered.com';
const srcDir = './src';
const publicDir = './public';

// Function to recursively get all files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Function to download file
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

// Main function
async function main() {
  const files = getAllFiles(srcDir);
  const urlRegex = /https?:\/\/totalmaxhomes\.wpenginepowered\.com\/wp-content\/uploads\/[^"'\s]+/g;
  const protocolRelativeRegex = /\/\/totalmaxhomes\.wpenginepowered\.com\/wp-content\/uploads\/[^"'\s]+/g;
  const imageUrls = new Set();

  // Collect all image URLs
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
      imageUrls.add(match[0]);
    }
    while ((match = protocolRelativeRegex.exec(content)) !== null) {
      imageUrls.add('https:' + match[0]);
    }
  });

  console.log(`Found ${imageUrls.size} unique image URLs`);

  // Download images
  for (const url of imageUrls) {
    const urlPath = url.replace('https://totalmaxhomes.wpenginepowered.com/wp-content/uploads/', '');
    const filename = path.basename(urlPath);
    const dest = path.join(publicDir, filename);

    try {
      await downloadFile(url, dest);
      console.log(`Downloaded ${filename}`);
    } catch (err) {
      console.error(`Failed to download ${url}: ${err.message}`);
    }
  }

  // Replace URLs in files
  const replacements = [];
  for (const url of imageUrls) {
    const urlPath = url.replace('https://totalmaxhomes.wpenginepowered.com/wp-content/uploads/', '');
    const filename = path.basename(urlPath);
    const localPath = `/${filename}`;
    replacements.push({ old: url, new: localPath });
    replacements.push({ old: url.replace('https:', ''), new: localPath }); // for protocol relative
  }

  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    replacements.forEach(({ old, new: newPath }) => {
      if (content.includes(old)) {
        content = content.replace(new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPath);
        changed = true;
      }
    });
    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  });

  console.log('Done!');
}

main().catch(console.error);