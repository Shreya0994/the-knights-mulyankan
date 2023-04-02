import React from "react";
import PageBanner from "@/components/pageBanner/pagebanner";
import TimingSchedule from "@/components/department/dept-timing-block";
import { ServiceFeature } from "@/components/department/deptfeature";
import Image from "next/image";
import img1 from "@assets/images/service/bg-1.jpg";

const DepartmentSingle = () => {
  return (
    <>
      <PageBanner subHeading="Single Department" heading="Department Details" />
      <section className="section department-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="department-img">
                <Image src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="department-content mt-5">
                <h3 className="text-md">Medecine and Health</h3>
                <div className="divider my-4"></div>
                <p className="lead">Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum recusandae dolor autem laudantium, quaerat vel dignissimos. Magnam sint suscipit omnis eaque unde eos aliquam distinctio, quisquam iste, itaque possimus . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet alias modi eaque, ratione recusandae cupiditate dolorum repellendus iure eius rerum hic minus ipsa at, corporis nesciunt tempore vero voluptas. Tempore.</p>
                <ServiceFeature />
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
