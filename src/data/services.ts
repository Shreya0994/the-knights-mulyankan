import { ServiceItem, Services, ContentBlockProps } from '@/library/types'

const ServiceItems: ServiceItem[] = [
  {
    serviceName: 'Laboratory services',
    serviceDescription:
      'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
    serviceIconClass: 'icofont-laboratory',
  },
  {
    serviceName: 'Heart Disease',
    serviceDescription:
      'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
    serviceIconClass: 'icofont-heart-beat-alt',
  },
  {
    serviceName: 'icofont-tooth',
    serviceDescription:
      'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
    serviceIconClass: 'icofont-laboratory',
  },
  {
    serviceName: 'Body Surgery',
    serviceDescription:
      'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
    serviceIconClass: 'icofont-crutch',
  },
  {
    serviceName: 'Neurology Sargery',
    serviceDescription:
      'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
    serviceIconClass: 'icofont-brain-alt',
  },
  {
    serviceName: 'Gynecology',
    serviceDescription:
      'Saepe nulla praesentium eaque omnis perferendis a doloremque.',
    serviceIconClass: 'icofont-dna-alt-1',
  },
]

const Services: Services = {
  title: 'Award winning patient care',
  description:
    'Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.',
  serviceItems: ServiceItems,
}

export const ContentBlock: ContentBlockProps = {
  title: 'Personal care for your healthy living',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos, libero delectus.',
  image: 'https://themewagon.github.io/novena/images/about/sign.png',
}

export { Services }
