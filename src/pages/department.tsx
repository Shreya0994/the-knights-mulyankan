import React from "react";
import PageBanner from "@/components/pageBanner/pagebanner";
import DepartmentComponent from "@/components/department/department";
import Head from "next/head";

const Department = () => {
  return (
    <>
      <Head>
        <title>Departments - Novena</title>
      </Head>
      <PageBanner subHeading="Care Department" heading="All Department" />
      <DepartmentComponent />
    </>
  );
};
export default Department;
