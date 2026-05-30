export async function GET() {
  return new Response('google.com, pub-4276130467303652, DIRECT, f08c47fec0942fa0', {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
