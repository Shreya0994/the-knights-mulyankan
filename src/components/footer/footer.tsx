import React from "react";   
import logoimage from "images/logo.png";
import Departments from "./departmentInfo";
import Support from "./supportInfo";
import ContactInfo from "./contactInfo";
import CopyRight from "./copyRight";
import CompanyInfo from "./companyInfo"
import { useState, useEffect } from 'react'
import { ICompanyInformation } from "@/library/types";



const Footer =()=>{
	const crText = '&copy; Copyright Reserved to <span class="text-color">Novena</span> by <a href="https://themefisher.com/" target="_blank">Themefisher</a>';
	const distrubutedby='Distributed by <Link href="https://themewagon.com/" target="_blank">Themewagon</Link>';
	const [data, setData] = useState<ICompanyInformation | null>(null)
	useEffect(() => {	
		fetch('/api/company-information')
		  .then((res) => res.json())
		  .then((data) => {
			setData(data)
			console.log("data is",data);			
		  })
	  }, []);

    return(
	<>
   <footer className="footer section gray-bg">
	<div className="container">
		<div className="row">
		{data && <CompanyInfo data={data} ></CompanyInfo>}
			<Departments title="Departments" department1="Surgery" department2="Medicine" department3="Wome's Health" department4="Radiology" department5="Cardioc"/>
			<Support title="Support" supportInfo1="FAQ"  supportInfo2="Terms" supportInfo3="Company Support" supportInfo4="Privacy Policy" supportInfo5="Company Licence"></Support>
			{data?.contactInformation && <ContactInfo title="Get In Touch" data={data?.contactInformation}></ContactInfo>}
	
     </div>
	 <CopyRight copyRightText={crText} ></CopyRight>
    </div>
	</footer>

    </>)
}

export default Footer;
