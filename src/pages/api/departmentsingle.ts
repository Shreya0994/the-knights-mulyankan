// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { deparmentItems } from '@/data/department'
import { Card } from '@/library/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Card>
) {
  const { title } = req.query
  //if (title) {
  res
    .status(200)
    .json(
      deparmentItems.find(
        (d) => d.title.toLowerCase() === 'Opthomology'.toString().toLowerCase()
      ) as Card
    )
  //   } else {
  //     return deparmentItems[0] as Card
  //   }
}
