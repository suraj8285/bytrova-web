# Bytrova Web

Marketing site for Bytrova, built with the Next.js App Router.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Validation

```bash
npm run lint
npm run build
```

The homepage is in `app/page.js`. Contact inquiries are validated by `app/api/contact/route.js` and forwarded to the configured email service.

## Production

```bash
npm run build
npm run start
```
