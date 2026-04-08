const ALLOWED_ORIGINS = [
  'https://theglowwell.com',
  'https://www.theglowwell.com',
  'https://theglowwell-site.pages.dev'
];

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': origin || '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    const corsHeaders = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': origin || '*'
    };

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const cache = caches.default;
    const cacheKey = new Request(`https://ratelimit.internal/${ip}`);
    let limitRecord = await cache.match(cacheKey);

    if (limitRecord) {
      const count = parseInt(await limitRecord.text());
      if (count >= 10) {
        return new Response(JSON.stringify({ error: 'Too many requests. Try again in an hour.' }), { status: 429, headers: corsHeaders });
      }
      await cache.put(cacheKey, new Response(String(count + 1), { headers: { 'Cache-Control': 'max-age=3600' } }));
    } else {
      await cache.put(cacheKey, new Response('1', { headers: { 'Cache-Control': 'max-age=3600' } }));
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: corsHeaders });
    }

    // ── MailerLite subscribe route ─────────────
    if (body.callType === 'subscribe') {
      try {
        const payload = {
          email: body.email,
          groups: ['184223623974750017'],
          fields: body.fields || {}
        };
        await fetch('https://connect.mailerlite.com/api/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${env.MAILERLITE_KEY}`
          },
          body: JSON.stringify(payload)
        });
      } catch(e) {
        console.error('MailerLite subscribe error:', e);
      }
      return new Response(JSON.stringify({ ok: true }), { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const isFreeCall = url.pathname === '/free' || body.callType === 'free';
    const isPaidCall = url.pathname === '/report' || body.callType === 'report';

    let maxTokens = 800;

    if (isPaidCall) {
      maxTokens = 4000;
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: maxTokens,
        temperature: 0,
        messages: body.messages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Anthropic error:', response.status, JSON.stringify(data));
      return new Response(JSON.stringify({ error: true, status: response.status, detail: data }), {
        status: response.status,
        headers: corsHeaders
      });
    }

    const rawText = data.content?.[0]?.text || '';
    let parsed;

    try {
      parsed = JSON.parse(rawText);
    } catch {
      const codeBlock = rawText.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (codeBlock) {
        try { parsed = JSON.parse(codeBlock[1]); } catch {}
      }
      if (!parsed) {
        const jsonMatch = rawText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          try { parsed = JSON.parse(jsonMatch[0]); } catch {}
        }
      }
      if (!parsed) {
        console.error('JSON parse failed. Raw text:', rawText.slice(0, 500));
        return new Response(JSON.stringify({ error: 'JSON parse failed', raw: rawText.slice(0, 500) }), {
          status: 500,
          headers: corsHeaders
        });
      }
    }

    return new Response(JSON.stringify(parsed), { headers: corsHeaders });
  }
};
