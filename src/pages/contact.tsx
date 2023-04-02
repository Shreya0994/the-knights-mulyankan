import React from "react";
import { CardsItems } from "@/data/cards";
import PageBanner from "@/components/pageBanner/pagebanner";
import ContactUsForm from "@/components/forms/contactusform";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact us - Novena</title>
      </Head>
      <PageBanner subHeading="About Us" heading="About Us" />
      <ContactUsForm
        nameField={"Your Full Name"}
        emailField={"Your Email Address"}
        subjectField={"Your Query Topic"}
        phoneField={"Your Phone Number"}
        messageField={"Your Message"}
        submitButton={"Send Messege"}
        title={"Contact us"}
        description={
          "Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?"
        }
      />
    </>
  );
};
export default Contact;
