import React from "react";
import PageBanner from "@/components/pageBanner/pagebanner";
import { Appoinment } from "@/components/appointment/getappointments";

const Department = () => {
    
    return(
        <>
            <PageBanner subHeading="Appoinment" heading="Book your Seat" />
            <Appoinment />
        </>
    )
}
export default Department;