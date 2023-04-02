import { DepartmentComponent, PromoComponent } from '@/library/types'
import { Card } from '@/library/types'

const deparmentPromoComponent: PromoComponent = {
  title: 'Award winning patient care',
  description:
    'Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.',
}

export const deparmentItems: Card[] = [
  {
    image: 'https://themewagon.github.io/novena/images/about/about-1.jpg',
    serviceimage: 'https://themewagon.github.io/novena/images/service/bg-1.jpg',
    title: 'Opthomology',
    description:
      'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
    longdescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum recusandae dolor autem laudantium, quaerat vel dignissimos. Magnam sint suscipit omnis eaque unde eos aliquam distinctio, quisquam iste, itaque possimus . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet alias modi eaque, ratione recusandae cupiditate dolorum repellendus iure eius rerum hic minus ipsa at, corporis nesciunt tempore vero voluptas. Tempore.',
    ctaText: 'Learn More',
    href: '',
  },
  {
    image: 'https://themewagon.github.io/novena/images/about/about-2.jpg',
    serviceimage:
      'https://themewagon.github.io/novena/images/service/service-1.jpg',
    title: 'Cardiology',
    description:
      'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
    longdescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum recusandae dolor autem laudantium, quaerat vel dignissimos. Magnam sint suscipit omnis eaque unde eos aliquam distinctio, quisquam iste, itaque possimus . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet alias modi eaque, ratione recusandae cupiditate dolorum repellendus iure eius rerum hic minus ipsa at, corporis nesciunt tempore vero voluptas. Tempore.',
    ctaText: 'Learn More',
    href: '',
  },
  {
    image: 'https://themewagon.github.io/novena/images/about/about-3.jpg',
    serviceimage:
      'https://themewagon.github.io/novena/images/service/service-2.jpg',
    title: 'Dental Care',
    description:
      'Saepe nulla praesentium eaque omnis perferendis a doloremque..',
    longdescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum recusandae dolor autem laudantium, quaerat vel dignissimos. Magnam sint suscipit omnis eaque unde eos aliquam distinctio, quisquam iste, itaque possimus . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet alias modi eaque, ratione recusandae cupiditate dolorum repellendus iure eius rerum hic minus ipsa at, corporis nesciunt tempore vero voluptas. Tempore.',
    ctaText: 'Learn More',
    href: '',
  },
  {
    image: 'https://themewagon.github.io/novena/images/about/about-4.jpg',
    serviceimage:
      'https://themewagon.github.io/novena/images/service/service-3.jpg',
    title: 'Child Care',
    description:
      'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
    longdescription:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum recusandae dolor autem laudantium, quaerat vel dignissimos. Magnam sint suscipit omnis eaque unde eos aliquam distinctio, quisquam iste, itaque possimus . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet alias modi eaque, ratione recusandae cupiditate dolorum repellendus iure eius rerum hic minus ipsa at, corporis nesciunt tempore vero voluptas. Tempore.',
    ctaText: 'Learn More',
    href: '',
  },
]

export const deparmentPageComponent: DepartmentComponent = {
  promo: deparmentPromoComponent,
  deparmentItems: deparmentItems,
}
