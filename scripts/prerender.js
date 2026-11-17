import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function prerender() {
  const distHtmlPath = path.join(rootDir, 'dist', 'index.html');
  const ssrBundlePath = path.join(rootDir, 'dist-ssr', 'App.js');

  if (!fs.existsSync(distHtmlPath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  if (!fs.existsSync(ssrBundlePath)) {
    console.error('dist-ssr/App.js not found! Run vite build --ssr first.');
    process.exit(1);
  }

  console.log('Pre-rendering App component to static HTML...');
  const ssrModule = await import(`file:///${ssrBundlePath.replace(/\\/g, '/')}`);
  const App = ssrModule.default;
  const appHtml = ReactDOMServer.renderToString(React.createElement(App));

  let indexHtml = fs.readFileSync(distHtmlPath, 'utf8');

  // Replace content inside <div id="root">...</div> with pre-rendered appHtml
  const rootRegex = /<div id="root">[\s\S]*?<\/div>/;
  if (!rootRegex.test(indexHtml)) {
    console.error('Could not find <div id="root"> in dist/index.html');
    process.exit(1);
  }

  indexHtml = indexHtml.replace(rootRegex, `<div id="root">${appHtml}</div>`);
  fs.writeFileSync(distHtmlPath, indexHtml, 'utf8');
  console.log(`Successfully pre-rendered dist/index.html (${appHtml.length} characters of HTML injected).`);

  // Clean up dist-ssr directory
  const distSsrDir = path.join(rootDir, 'dist-ssr');
  if (fs.existsSync(distSsrDir)) {
    fs.rmSync(distSsrDir, { recursive: true, force: true });
    console.log('Cleaned up dist-ssr temporary build folder.');
  }
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
