const fs = require('fs')
const globby = require('globby')

function addPage(page) {
  const path = page
    .replace('pages', '')
    .replace('.js', '')
    .replace('.mdx', '')
    .replace('.jsx', '')
    .replace('.tsx', '')
    .replace('.ts', '')
  const route = path === '/index' ? '' : path
  return `  <url>
    <loc>${`${process.env.SITE_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`
}

async function generateSitemap() {
  const pages = await globby([
    'pages/**/*{.js,.jsx,.tsx,.ts,.mdx}',
    '!pages/_*.js',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/wp-theme.tsx',
  ])
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`
  fs.writeFileSync('public/sitemap.xml', sitemap)
}
generateSitemap()
