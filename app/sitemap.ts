import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.bytrova.co.in',
      lastModified: new Date(),
    },
    {
      url: 'https://www.bytrova.co.in/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.bytrova.co.in/services',
      lastModified: new Date(),
    },
    {
      url: 'https://www.bytrova.co.in/contact',
      lastModified: new Date(),
    },
  ]
}