// Cloudflare Pages Function: returns the visitor's country from Cloudflare's edge geo.
export async function onRequestGet({ request }) {
  const c = (request.cf && request.cf.country) || 'XX';
  return new Response(JSON.stringify({ country: c }), {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}
