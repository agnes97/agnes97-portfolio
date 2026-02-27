export async function GET() {
  const res = await fetch('https://jana.macovi.space/_vercel/insights/script.js')
  const script = await res.text()

  const patched = script.replaceAll(
    'vitals.vercel-insights.com',
    'jana.macovi.space/_vitals',
  )

  return new Response(patched, {
    headers: {
      'content-type': 'application/javascript',
      'cache-control': 'public, max-age=3600',
    },
  })
}
