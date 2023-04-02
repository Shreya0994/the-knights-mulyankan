import React from "react";
import PageBanner from "@/components/pageBanner/pagebanner";
import DepartmentComponent from "@/components/department/department";

const Department = () => {
    
    return(
        <>
            <PageBanner subHeading="Care Department" heading="All Department" />
            <DepartmentComponent />
        </>
    )
}
export default Department;