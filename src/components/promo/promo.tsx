import React from "react";
import Heading from "@/components/shared/heading";
import Description from "@/components/shared/description";
import Image from "next/image";
import img1 from "@assets/images/about/img-1.jpg";
import img2 from "@assets/images/about/img-2.jpg";
import img3 from "@assets/images/about/img-3.jpg";
import Link from "next/link";

const Promo = () => {
  return (
    <section className="section about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6">
            <div className="about-img">
              <Image src={img1} alt="img1" className="img-fluid" />
              <Image src={img2} alt="img2" className="img-fluid mt-4" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="about-img mt-4 mt-lg-0">
              <Image src={img3} alt="img3" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-content pl-4 mt-4 mt-lg-0">
              <Heading
                className="title-color"
                title="Personal care <br />& healthy living"
              />
              <Description
                className="mt-4 mb-5"
                description="We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque."
              />
              <Link
                href="service"
                className="btn btn-main-2 btn-round-full btn-icon"
              >
                Services<i className="icofont-simple-right ml-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
