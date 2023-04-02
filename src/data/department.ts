import { DepartmentComponent, PromoComponent } from "@/library/types";
import { Card } from "@/library/types";

const deparmentPromoComponent: PromoComponent = {
  title: 'Award winning patient care',
  description: "Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat."
}

export const deparmentItems: Card[] = [
  {
    image: "https://themewagon.github.io/novena/images/about/about-1.jpg",
    title: "Opthomology",
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    ctaText: "Learn More",
    href: "",
  },
  {
    image: "https://themewagon.github.io/novena/images/about/about-2.jpg",
    title: "Cardiology",
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    ctaText: "Learn More",
    href: "",
  },
  {
    image: "https://themewagon.github.io/novena/images/about/about-3.jpg",
    title: "Dental Care",
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque..",
    ctaText: "Learn More",
    href: "",
  },
  {
    image: "https://themewagon.github.io/novena/images/about/about-4.jpg",
    title: "Child Care",
    description:
      "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
    ctaText: "Learn More",
    href: "",
  },
];

export const deparmentPageComponent : DepartmentComponent = {
  promo : deparmentPromoComponent,
  deparmentItems: deparmentItems
}
