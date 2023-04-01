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

export type StatisticItem = {
  statName: string;
  statCount: number;
  statIcon: string;
};
