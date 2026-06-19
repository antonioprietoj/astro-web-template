import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? 'https://www.ejemplo.com';

  const body = `User-agent: *
Allow: /
Disallow: /aviso-legal
Disallow: /politica-de-privacidad

Sitemap: ${base}sitemap.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
