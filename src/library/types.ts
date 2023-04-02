import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface IContactInformation {
  email: string;
  address: string;
  phoneNumber: string;
  timing: string;
}

export interface ICompanyInformation {
  contactInformation: IContactInformation;
  logo: string;
  description: string;
  socialLinks: Array<SocialLink>;
}

export type SocialLink = {
  href: string;
  iconClass: string;
};

export class CompanyInformation implements ICompanyInformation {
  public socialLinks: SocialLink[];
  constructor(
    public contactInformation: IContactInformation,
    public logo: string,
    public description: string,
    socialLinks: Array<SocialLink>
  ) {
    this.socialLinks = socialLinks;
  }
}

export type Card = {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
};

export type StatisticItem = {
  statName: string;
  statCount: number;
  statCountPlus: string;
  statIconClass: string;
};

export type InfoCard = {
  subHeading: string;
  title: string;
  description: string;
  cta: string;
  ctaText: string;
  icon: string;
};

export type Doctor = {
  id: number;
  name: string;
  image: string;
  designation: string;
  longdescription: string;
  department: string;
};

export type ClientItem = {
  clientLogo: string;
};

export type Client = {
  title: string;
  description: string;
  clientItems: ClientItem[];
};

export type TestimonialItem = {
  image: string;
  title: string;
  name: string;
  text: string;
};

export type TestimonialsProps = {
  title: string;
  description: string;
  testimonials: TestimonialItem[];
};

export type ServiceItem = {
  serviceName: string;
  serviceDescription: string;
  serviceIconClass: string;
};

export type Services = {
  title: string;
  description: string;
  serviceItems: ServiceItem[];
};

export type ContentBlockProps = {
  title: string
  description: string
  image: string
}

export type Awards = {
  title: string,
  clientItems: ClientItem[]
}
export type ContentBlock = {
  title: string;
  description: string;
  image: string;
};

export type PromoComponent = {
  title: string;
  description: string;
};

export type DepartmentComponent = {
  promo: PromoComponent,
  deparmentItems : Card[]
};

export type SpecialistComponent = {
  promo: PromoComponent,
  doctorItems : Doctor[]
};

export enum Page { About, Deparment }

export type ReccomendationsProps = {
  title: string;
  testimonials: TestimonialItem[];
};

export interface IAppointment {
  id: number,
  department: string,
  doctor: string,
  date: string,
  time: string,
  full_name: string,
  phone_number: string,
  message: string,
  created_at: string,
  updated_at: string
}