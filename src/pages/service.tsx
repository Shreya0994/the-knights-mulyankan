import Banner from "@/components/banner/banner";
import PageBanner from "@/components/pageBanner/pagebanner";
import ServiceCards from "@/components/servicecards/servicecards";
import bg from "@assets/images/bg/banner.jpg";
import React from "react";

const Service = () => {
    return (
        <>
            <PageBanner heading={"Our services"} subHeading={"What We Do"} />
            <ServiceCards />
            <Banner
                title={""}
                heading={"We are pleased to offer you the chance to have the healthy"}
                description={
                    ""
                }
                ctaText={"Make appoinment"}
                ctaLink={"appoinment.html"}
                bgImg={bg.src}
            />
        </>
    )
}
export default Service;
