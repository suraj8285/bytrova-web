import "./globals.css";

export const metadata = {
  title: "Bytrova – Software Solutions",
  description: "Bytrova delivers end-to-end software solutions — from web apps to enterprise platforms. Freelance speed, agency quality.",
  keywords: "software development, web app, mobile app, React, Node.js, freelance, India",
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
