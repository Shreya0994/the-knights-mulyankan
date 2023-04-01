import { CompanyInformation, ICompanyInformation } from "@/library/types";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

type CompanyInfoProps = {
  data: ICompanyInformation;
};

const CompanyInfo = (props: CompanyInfoProps) => {
  return (
    <>
      <div className="col-lg-4 mr-auto col-sm-6">
        <div className="widget mb-5 mb-lg-0">
          <div className="logo mb-4">
            <Image
              src={props.data?.logo}
              alt="Logo"
              width="212"
              height={60}
              className="img-fluid"
            />
          </div>
          <p> {props?.data.description}</p>

          <ul className="list-inline footer-socials mt-4">
            {props?.data.socialLinks.map((sl, index) => (
              <li key={index} className="list-inline-item">
                <Link href={sl.href}>
                  <i className={sl.iconClass}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
