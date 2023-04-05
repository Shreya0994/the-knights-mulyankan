import React from "react";
import PageBanner from "@/components/pageBanner/pagebanner";
import TimingSchedule from "@/components/department/dept-timing-block";
import { ServiceFeature } from "@/components/department/deptfeature";
import Image from "next/image";
import img1 from "@assets/images/service/bg-1.jpg";
import { Department } from "@/library/departmentsingle";
import { departmentData } from "@/data/departmentsingle";

const DepartmentSingle = () => {
  return (
    <>
      <PageBanner subHeading="Single Department" heading="Department Details" />
      <section className="section department-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="department-img">
                <Image src={departmentData.image} alt="" className="img-fluid" width={1110} height={740} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="department-content mt-5">
                <h3 className="text-md">{departmentData.deptname}</h3>
                <div className="divider my-4"></div>
                <p className="lead">{departmentData.description}</p>
                <p>{departmentData.longdescription}</p>
                {/* <ServiceFeature /> */}
              </div>
            </div>
            <TimingSchedule />
          </div>
        </div>
      </section>
    </>
  );
};
export default DepartmentSingle;
