import Link from "next/link";
import React from "react"


type CompanyInfoProps={
    companyDesc:string;  
    linkedlnLink:string;
    facebookLink:string;
    twitterLink:string;

} 

const CompanyInfo=(props: CompanyInfoProps)=>{
    return(
      <>
      <div className="col-lg-4 mr-auto col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<div className="logo mb-4">
						 {/* <img src={logoimage} }alt="" className="img-fluid">  */}
					</div>
					<p> {props.companyDesc}</p>


					<ul className="list-inline footer-socials mt-4">
						<li className="list-inline-item"><Link href={props.facebookLink}><i className="icofont-facebook"></i></Link></li>
						<li className="list-inline-item"><Link href={props.twitterLink}><i className="icofont-twitter"></i></Link></li>
						<li className="list-inline-item"><Link href={props.linkedlnLink}><i className="icofont-linkedin"></i></Link></li>
					</ul>
				</div>
			</div>
      
      
      </>
    );
};

export default CompanyInfo;