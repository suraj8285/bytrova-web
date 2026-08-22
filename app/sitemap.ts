import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.bytrova.co.in',
      lastModified: new Date(),
    },
  ]
}