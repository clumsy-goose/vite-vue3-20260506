const ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/helloworld-cloud', changefreq: 'monthly', priority: '0.6' },
  { path: '/helloworld-edge', changefreq: 'monthly', priority: '0.6' },
]

const DEFAULT_SITE_ORIGIN = 'https://live-production.corbinlin.cn'

const escapeXml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  })[char])

export function resolveSiteOrigin(siteUrl) {
  if (!siteUrl) {
    return DEFAULT_SITE_ORIGIN
  }
  try {
    const url = new URL(siteUrl)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      throw new Error('unsupported protocol')
    }
    return url.origin
  } catch {
    console.warn(`[sitemap] VITE_SITE_URL 不是合法的 http(s) 地址，sitemap 使用默认域名 ${DEFAULT_SITE_ORIGIN}。`)
    return DEFAULT_SITE_ORIGIN
  }
}

export function buildSitemap(origin, date = new Date()) {
  const lastmod = date.toISOString().slice(0, 10)
  const entries = ROUTES.map(({ path, changefreq, priority }) => {
    const loc = escapeXml(`${origin}${path}`)
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n')
  }).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
}

export function buildRobots(origin) {
  return `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`
}

export function sitemapPlugin(origin) {
  return {
    name: 'vite-plugin-sitemap',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = new URL(req.url, 'http://localhost').pathname
        if (pathname === '/sitemap.xml' || pathname === '/robots.txt') {
          const isSitemap = pathname === '/sitemap.xml'
          res.setHeader('Content-Type', isSitemap ? 'application/xml; charset=utf-8' : 'text/plain; charset=utf-8')
          res.end(isSitemap ? buildSitemap(origin) : buildRobots(origin))
          return
        }
        next()
      })
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: buildSitemap(origin) })
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: buildRobots(origin) })
    },
  }
}
