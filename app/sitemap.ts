import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...[
      '', '/products', '/products/schoolos', '/services',
      '/services/website-development', '/services/mobile-app-development',
      '/services/custom-software', '/services/maintenance-support',
      '/portfolio', '/pricing', '/about', '/contact', '/blog', '/resources',
      '/privacy', '/terms',
    ].map((path) => ({
      url: `https://www.bytrova.co.in${path}`,
      lastModified: new Date(),
    })),
  ]
}