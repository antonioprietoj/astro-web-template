import type { APIRoute } from 'astro';

const publicPages = [
  '',
  'servicios/',
  'sobre-nosotros/',
  'contacto/',
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? 'https://www.ejemplo.com';

  const urls = publicPages
    .map((path) => `  <url><loc>${base}${path}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
