// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from 'data/sites.json'

type Data = {
    slug: string
    name: string
    description: string
    keywords: string
    image: string
    favicon: string
    url: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { slug } = req.query
    res.status(200).json(data.filter((item) => item.slug === slug)[0])
}
