#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const [filename, ...titleParts] = process.argv.slice(2);
const title = titleParts.join(' ');

if (!filename || !title) {
  console.error('Usage: node add-blog-card.js <filename> <title>');
  process.exit(1);
}

const dir = __dirname;

// Pull latest before making changes
execSync('git pull --rebase origin main', { cwd: dir, stdio: 'inherit' });

const blogPath = path.join(dir, 'blog.html');
let html = fs.readFileSync(blogPath, 'utf8');

const card = `    <article class="blog-card" onclick="window.location='/${filename}'">
      <div class="blog-card-img-placeholder">🌿</div>
      <div class="blog-card-body">
        <div class="blog-card-tag">Skincare</div>
        <div class="blog-card-title">${title}</div>
        <div class="blog-card-meta"><span>The Glow Well</span></div>
      </div>
    </article>`;

const marker = '<div class="blog-grid">';
const idx = html.indexOf(marker);

if (idx === -1) {
  console.error('Could not find <div class="blog-grid"> in blog.html');
  process.exit(1);
}

const insertAt = idx + marker.length;
html = html.slice(0, insertAt) + '\n' + card + '\n' + html.slice(insertAt);

fs.writeFileSync(blogPath, html, 'utf8');
console.log(`Added card for "${title}" to blog.html`);

execSync('git add blog.html', { cwd: dir, stdio: 'inherit' });
execSync(`git commit -m "Add blog card: ${title}"`, { cwd: dir, stdio: 'inherit' });
execSync('git push origin main', { cwd: dir, stdio: 'inherit' });
console.log('Committed and pushed to GitHub.');
