// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Services } from '@/data/services'
import { Services as ServicesData } from '@/library/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServicesData>
) {
  res.status(200).json(Services)
}
