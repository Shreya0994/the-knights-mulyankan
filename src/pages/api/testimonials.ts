// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Testimonials } from '@/data/testimonials'
import { TestimonialsProps } from '@/library/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TestimonialsProps>
) {
  res.status(200).json(Testimonials)
}
