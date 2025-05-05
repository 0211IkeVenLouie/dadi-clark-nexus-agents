import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const targetUrl = 'http://dify.dadicoach.com/chatbot/gpLJt7BI8VN1xb01'

  try {
    const response = await fetch(targetUrl)

    const contentType = response.headers.get('content-type') || 'text/html'
    res.setHeader('Content-Type', contentType)

    const body = await response.text()
    res.status(200).send(body)
  } catch (error) {
    console.error('Proxy error:', error)
    res.status(500).send('Error fetching proxied content')
  }
}
