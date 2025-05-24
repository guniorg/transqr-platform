export async function POST(req: Request) {
  const { text, target } = await req.json();

  const url = `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q: text,
      target,
      format: 'text',
    }),
  });

  const result = await res.json();
  console.log('🌐 API 응답:', result);

  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' },
  });
}




  