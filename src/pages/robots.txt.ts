export function GET() {
  return new Response(
    'User-agent: *\nAllow: /blog\nAllow: /resources\nDisallow: /release-probe\nSitemap: https://www.liforma.ai/sitemap.xml\nSitemap: https://www.liforma.ai/blog/sitemap.xml\n',
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
}
