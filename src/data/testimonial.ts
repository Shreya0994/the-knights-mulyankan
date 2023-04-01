import { TestimonialListProps, TestimonialProps } from '@/library/types'

export const Testimoniallists: Array<TestimonialListProps> = [
  {
    id: 1,
    image: 'assets/images/team/test-thumb1.jpg',
    title: 'Amazing service!',
    name: 'John Partho',
    text: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.',
  },
  {
    id: 2,
    image: 'assets/images/team/test-thumb2.jpg',
    title: 'Expert doctors!',
    name: 'Mullar Sarth',
    text: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.',
  },
  {
    id: 3,
    image: 'assets/images/team/test-thumb3.jpg',
    title: 'Good Support!',
    name: 'Kolis Mullar',
    text: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.',
  },
  {
    id: 4,
    image: 'assets/images/team/test-thumb4.jpg',
    title: 'Nice Environment!',
    name: 'Partho Sarothi',
    text: 'They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.',
  },
]
export const TestimonialHeader: TestimonialProps = {
  id: 1,
  title: 'We served over 5000+ Patients',
  description:
    'Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.',
  items: Testimoniallists,
}
