const ALLOWED_ORIGINS = [
  'https://theglowwell.com',
  'https://www.theglowwell.com',
  'https://theglowwell-site.pages.dev'
];

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 3600;

export default {
  async fetch(request, env) {

    const origin = request.headers.get('Origin');
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': origin || '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 5 * 1024 * 1024) {
      return new Response(JSON.stringify({ error: 'Request too large' }), { status: 413 });
    }

    const ip = request.headers.get('CF-Connecting-IP') ||
               request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
               'unknown';

    const cache = caches.default;
    const cacheKey = new Request(`https://ratelimit.internal/${ip}`);
    let limitRecord = await cache.match(cacheKey);

    if (limitRecord) {
      const count = parseInt(await limitRecord.text());
      if (count >= RATE_LIMIT_MAX) {
        return new Response(JSON.stringify({
          error: 'Too many scans. Try again in an hour.'
        }), {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': origin || '*'
          }
        });
      }
      await cache.put(cacheKey, new Response(String(count + 1), {
        headers: { 'Cache-Control': `max-age=${RATE_LIMIT_WINDOW}` }
      }));
    } else {
      await cache.put(cacheKey, new Response('1', {
        headers: { 'Cache-Control': `max-age=${RATE_LIMIT_WINDOW}` }
      }));
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
    }

    if (body.messages) {
      const imageMessage = body.messages.find(m =>
        Array.isArray(m.content) && m.content.some(c => c.type === 'image')
      );
      if (imageMessage) {
        const imageContent = imageMessage.content.find(c => c.type === 'image');
        if (imageContent?.source?.data) {
          const sizeEstimate = imageContent.source.data.length * 0.75;
          if (sizeEstimate > 3 * 1024 * 1024) {
            return new Response(JSON.stringify({ error: 'Image too large. Please use a smaller photo.' }), {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': origin || '*'
              }
            });
          }
        }
      }
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': origin || '*'
      }
    });
  }
};
