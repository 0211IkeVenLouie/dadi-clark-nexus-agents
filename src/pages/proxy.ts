import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = req.query.url as string

  if (!url || !url.startsWith('http://dify.dadicoach.com')) {
    return res.status(400).send('Invalid target URL')
  }

  try {
    const response = await fetch(url)
    const content = await response.text()
    res.setHeader('Content-Type', 'text/html')
    res.send(content)
  } catch (err) {
    res.status(500).send('Error fetching iframe content')
  }
}
