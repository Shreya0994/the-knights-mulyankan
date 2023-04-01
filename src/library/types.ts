import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type TestimonialListProps = {
  id: number
  image: string
  title: string
  name: string
  text: string
}

export type TestimonialProps = {
  id: number
  title: string
  description: string
  items: TestimonialListProps[]
}
