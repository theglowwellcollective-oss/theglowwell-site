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

// Inject Clarity script into the blog post file itself
const postPath = path.join(dir, filename);
if (fs.existsSync(postPath)) {
  let postHtml = fs.readFileSync(postPath, 'utf8');
  if (!postHtml.includes('vzqj6mrwig')) {
    const clarityScript = `\n<!-- Microsoft Clarity -->\n<script type="text/javascript">\n    (function(c,l,a,r,i,t,y){\n        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\n        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;\n        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n    })(window, document, "clarity", "script", "vzqj6mrwig");\n<\/script>\n`;
    postHtml = postHtml.replace('</head>', clarityScript + '</head>');
    fs.writeFileSync(postPath, postHtml, 'utf8');
    console.log(`Added Clarity script to ${filename}`);
  }

  // Inject Glow Scan popup into new blog posts
  if (!postHtml.includes('scanPopupOverlay')) {
    const popupBlock = `
<!-- Glow Scan popup — fires after 7s, respects 7-day dismiss -->
<div class="scan-popup-overlay" id="scanPopupOverlay">
  <div class="scan-popup">
    <button class="scan-popup-close" id="scanPopupClose">×</button>
    <div class="scan-popup-eyebrow">Still reading? Smart.</div>
    <div class="scan-popup-score">?</div>
    <div class="scan-popup-score-label">What's your Glow Score?</div>
    <h3>Skip the rabbit hole — get your answer in <em>60 seconds.</em></h3>
    <p>Upload a selfie. Find out your real skin age, your Glow Score, and exactly what your skin needs. 14,000+ women already have.</p>
    <a href="/glowscan-v2.html?start=quiz" class="scan-popup-btn">Get My Free Glow Score →</a>
    <div class="scan-popup-fine">No credit card. No account. Just your results.</div>
    <span class="scan-popup-dismiss" id="scanPopupDismiss">No thanks, I'll keep reading</span>
  </div>
</div>
<style>
.scan-popup-overlay{position:fixed;inset:0;background:rgba(37,35,32,0.82);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;pointer-events:none;transition:opacity 0.35s ease;backdrop-filter:blur(4px)}
.scan-popup-overlay.active{opacity:1;pointer-events:all}
.scan-popup{background:#F7F3EE;max-width:400px;width:100%;padding:44px 36px;position:relative;animation:popIn 0.35s ease both;text-align:center;border-top:3px solid #C4845A}
@keyframes popIn{from{transform:scale(0.94) translateY(10px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}
.scan-popup-close{position:absolute;top:14px;right:18px;font-size:22px;color:#9A9088;cursor:pointer;background:none;border:none;line-height:1}
.scan-popup-eyebrow{font-size:10px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:#A06840;margin-bottom:16px}
.scan-popup-score{font-family:'Cormorant Garamond',serif;font-size:72px;font-weight:300;color:#252320;line-height:1;margin-bottom:4px}
.scan-popup-score-label{font-size:11px;color:#9A9088;letter-spacing:2px;text-transform:uppercase;margin-bottom:20px}
.scan-popup h3{font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:300;color:#252320;line-height:1.25;margin-bottom:10px}
.scan-popup h3 em{font-style:italic;color:#4E6B49}
.scan-popup p{font-size:13px;font-weight:300;color:#6B6458;line-height:1.75;margin-bottom:24px}
.scan-popup-btn{display:block;width:100%;background:#C4845A;color:#fff;border:none;padding:17px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:500;letter-spacing:0.5px;cursor:pointer;text-decoration:none;transition:background 0.2s;border-radius:2px}
.scan-popup-btn:hover{background:#A06840}
.scan-popup-fine{font-size:11.5px;color:#9A9088;margin-top:12px}
.scan-popup-dismiss{font-size:12px;color:#9A9088;cursor:pointer;margin-top:10px;display:block;text-decoration:underline;text-underline-offset:3px}
</style>
<script>
(function(){
  var STORAGE_KEY='glowscan_popup_dismissed';
  function wasDismissed(){try{var d=localStorage.getItem(STORAGE_KEY);return d&&(Date.now()-parseInt(d))<7*24*60*60*1000;}catch(e){return false;}}
  function showPopup(){if(wasDismissed())return;var o=document.getElementById('scanPopupOverlay');if(o){o.classList.add('active');document.body.style.overflow='hidden';}}
  function closePopup(){var o=document.getElementById('scanPopupOverlay');if(o){o.classList.remove('active');document.body.style.overflow='';}try{localStorage.setItem(STORAGE_KEY,Date.now().toString());}catch(e){}}
  setTimeout(showPopup,7000);
  document.getElementById('scanPopupClose').addEventListener('click',closePopup);
  document.getElementById('scanPopupDismiss').addEventListener('click',closePopup);
  document.getElementById('scanPopupOverlay').addEventListener('click',function(e){if(e.target===this)closePopup();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closePopup();});
})();
<\/script>
`;
    postHtml = postHtml.replace('</body>', popupBlock + '</body>');
    fs.writeFileSync(postPath, postHtml, 'utf8');
    console.log(`Added Glow Scan popup to ${filename}`);
  }
}

execSync(`git add blog.html ${filename}`, { cwd: dir, stdio: 'inherit' });
execSync(`git commit -m "Add blog card: ${title}"`, { cwd: dir, stdio: 'inherit' });
execSync('git push origin main', { cwd: dir, stdio: 'inherit' });
console.log('Committed and pushed to GitHub.');
