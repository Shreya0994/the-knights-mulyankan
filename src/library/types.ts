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

const companyInformation = new CompanyInformation(
  {
    email: "support@gmail.com",
    address: "Address Ta-134/A, New York, USA",
    phoneNumber: "823-4565-13456",
    timing: "Mon to Fri: 08:30 - 18:00",
  },
  "https://themewagon.github.io/novena/images/logo.png",
  "Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.",
  [
    {
      href: "www.facebook.com",
      iconClass: "icofont-facebook",
    },
    {
      href: "www.twitter.com",
      iconClass: "icofont-twitter",
    },
    {
      href: "www.linkedin.com",
      iconClass: "icofont-linkedin",
    },
  ]
);

export { companyInformation };
