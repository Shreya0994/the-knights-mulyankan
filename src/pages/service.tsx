import Banner from "@/components/banner/banner";
import PageBanner from "@/components/pageBanner/pagebanner";
import ServiceCards from "@/components/servicecards/servicecards";
import { NextPageWithLayout } from "@/library/types";
import bg from "@assets/images/bg/banner.jpg";
import Head from "next/head";
import React from "react";

const Service: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Services - Novena</title>
      </Head>
      <PageBanner heading={"Our services"} subHeading={"What We Do"} />
      <ServiceCards />
      <Banner
        title={""}
        heading={"We are pleased to offer you the chance to have the healthy"}
        description={""}
        ctaText={"Make appoinment"}
        ctaLink={"appoinment.html"}
        bgImg={bg.src}
      />
    </>
  );
};
export default Service;
