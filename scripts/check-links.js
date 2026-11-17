import fs from 'node:fs';

async function checkLinks() {
  console.log('Fetching http://localhost:4173/ ...');
  const res = await fetch('http://localhost:4173/');
  if (!res.ok) {
    throw new Error(`Failed to fetch home page: HTTP ${res.status}`);
  }
  const html = await res.text();

  // Find all internal links
  const linkRegex = /href=["']([^"']+)["']/g;
  let match;
  const links = new Set();
  while ((match = linkRegex.exec(html)) !== null) {
    const href = match[1];
    if (href.startsWith('#') || href.startsWith('/') || href.startsWith('http://localhost:4173')) {
      links.add(href);
    }
  }

  console.log(`Found ${links.size} unique internal/anchor links.`);

  let errors = 0;
  for (const link of links) {
    if (link.startsWith('#')) {
      const id = link.slice(1);
      if (id === 'top') continue; // special case
      const hasId = html.includes(`id="${id}"`) || html.includes(`id='${id}'`);
      if (!hasId) {
        console.error(`[FAIL] Anchor target #${id} not found in page!`);
        errors++;
      } else {
        console.log(`[PASS] Anchor #${id} exists.`);
      }
    } else {
      const url = link.startsWith('http') ? link : `http://localhost:4173${link}`;
      try {
        const linkRes = await fetch(url, { method: 'HEAD' });
        if (linkRes.ok) {
          console.log(`[PASS] ${link} -> HTTP ${linkRes.status}`);
        } else {
          console.error(`[FAIL] ${link} -> HTTP ${linkRes.status}`);
          errors++;
        }
      } catch (err) {
        console.error(`[FAIL] ${link} -> Network error:`, err.message);
        errors++;
      }
    }
  }

  // Also check 404 response
  const notFoundRes = await fetch('http://localhost:4173/non-existent-page-test-404');
  console.log(`404 test response: HTTP ${notFoundRes.status}`);

  if (errors > 0) {
    console.error(`Link check finished with ${errors} error(s).`);
    process.exit(1);
  } else {
    console.log('All internal links and anchors verified successfully!');
  }
}

checkLinks().catch(err => {
  console.error(err);
  process.exit(1);
});
