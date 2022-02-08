// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const data = [
    {
        site: 'sprott',
        menu: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Bachelor of Commerce',
                link: 'bachelor-of-commerce',
            },
            {
                text: 'Bachelor of International Business',
                link: 'bachelor-of-international-business',
            },
            {
                text: 'Post-Baccalaureate Diploma in Accounting',
                link: 'accounting-diploma',
            },
        ],
    },
]

type Data = {
    site: string
    menu: {
        text: string
        link: string
    }[]
}[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(data)
}
