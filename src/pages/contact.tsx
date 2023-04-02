import React from "react";
import PageBanner from "@/components/pageBanner/pagebanner";
import ContactUsForm from "@/components/contact/contactusform";
import Head from "next/head";
import ContactCardInfo from "@/components/contact/contactCardInfo";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact us - Novena</title>
      </Head>
      <PageBanner heading="Contact Us" subHeading="Get In touch" />
      <ContactCardInfo />
      <ContactUsForm title={"Contact us"} description={"Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?"} />
    </>
  );
};
export default Contact;
