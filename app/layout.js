import "./globals.css";

export const metadata = {
  title: "Bytrova — Digital Product Studio",
  description: "Bytrova builds high-performance web, mobile, and AI products for ambitious businesses.",
  keywords: "digital products, web development, mobile apps, AI automation, product studio, startup growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="app-root">
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
