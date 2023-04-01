import { NextPage } from "next";
import { type } from "os";
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

export type CardItem = {
  image: string;
  title: string;
  description: string;
  ctaname: string;
  href: string;
};
export type StatisticItem = {
  statName: string;
  statCount: number;
  statCountPlus: string;
  statIconClass: string;
};

export type HomePageCardLists = {
  id: number;
  subheading: string;
  title: string;
  description: string;
  cta: string;
  ctatext: string;
  icons: string;
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

export type TestimonialListProps = {
  id: number;
  image: string;
  title: string;
  name: string;
  text: string;
};

export type TestimonialProps = {
  id: number;
  title: string;
  description: string;
  items: TestimonialListProps[];
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

export type ContentBlock = {
  title: string;
  description: string;
  image: string;
};
