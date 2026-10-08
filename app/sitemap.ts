import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    "/website-development",
    "/mobile-app-development",
    "/web-application-development",
    "/custom-software-development",
    "/saas-development",
    "/ui-ux-design",
    "/backend-api-development",
    "/portfolio",
    "/portfolio/tabletrail",
    "/portfolio/reproute",
    "/portfolio/glowdesk",
    "/portfolio/opsatlas",
    "/pricing",
    "/about",
    "/contact",
    "/resources",
    "/blog",
    "/privacy",
    "/terms",
  ];
  return [
    ...paths.map((path) => ({
      url: `https://www.bytrova.co.in${path}`,
      lastModified: new Date(),
    })),
  ]
}