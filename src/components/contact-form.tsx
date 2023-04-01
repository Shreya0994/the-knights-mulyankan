import { Chicle } from "next/font/google";
import { ReactElement } from "react";

type ContactFormProps = {
  title: string;
  children: ReactElement;
  subHeading?: string;
};
const ContactForm = ({ title, children, subHeading }: ContactFormProps) => {
  return (
    <>
      <h3>{title}</h3>
      {children}
      {subHeading && <span>{subHeading}</span>}
    </>
  );
};

export default ContactForm;
