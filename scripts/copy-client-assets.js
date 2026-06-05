import { existsSync, mkdirSync, copyFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const clientDir = 'dist/client';
const outDir = 'dist';
const assetsOut = join(outDir, 'assets');

if (!existsSync(clientDir)) {
  console.error('No dist/client found — run the build first');
  process.exit(1);
}

// find index.html in dist/client
const files = readdirSync(clientDir);
const indexFile = files.find((f) => f.startsWith('index') && f.endsWith('.html'));
const indexSrc = indexFile ? join(clientDir, indexFile) : null;
const indexDst = join(outDir, 'index.html');

try {
  // ensure assets folder exists
  if (!existsSync(assetsOut)) mkdirSync(assetsOut, { recursive: true });

  // copy all files from dist/client/assets
  const clientAssetsDir = join(clientDir, 'assets');
  if (existsSync(clientAssetsDir)) {
    const items = readdirSync(clientAssetsDir);
    for (const item of items) {
      copyFileSync(join(clientAssetsDir, item), join(assetsOut, item));
    }
  }

  // copy index html if exists, otherwise generate a minimal index.html
  if (indexSrc && existsSync(indexSrc)) {
    copyFileSync(indexSrc, indexDst);
    console.log('Copied', indexSrc, 'to', indexDst);
  } else {
    // find main css and js files in dist/client/assets
    const clientAssetsDir = join(clientDir, 'assets');
    let css = null;
    let js = null;
    if (existsSync(clientAssetsDir)) {
      const assetFiles = readdirSync(clientAssetsDir);
      css = assetFiles.find((f) => f.endsWith('.css')) || null;
      js = assetFiles.find((f) => f.endsWith('.js')) || null;
    }
    const cssPath = css ? `./assets/${css}` : null;
    const jsPath = js ? `./assets/${js}` : null;
    const html = `<!doctype html>\n<html><head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n${cssPath ? `<link rel="stylesheet" href="${cssPath}">` : ''}\n</head><body>\n<div id="root"></div>\n${jsPath ? `<script type="module" src="${jsPath}"></script>` : ''}\n</body></html>`;
    writeFileSync(indexDst, html);
    console.log('Generated', indexDst, 'with', { cssPath, jsPath });
  }
} catch (err) {
  console.error('Failed to copy client assets:', err);
  process.exit(1);
}
