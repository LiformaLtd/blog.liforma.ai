export function GET() {
  return new Response(
    'User-agent: *\nAllow: /blog\nAllow: /resources\nSitemap: https://www.liforma.ai/sitemap.xml\n',
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
}
