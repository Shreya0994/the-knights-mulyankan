import React from "react";
import { useState, useEffect } from 'react'
import { ICompanyInformation, IContactInformation } from "@/library/types";

type ContactInfoProps ={
	title:string;
data: IContactInformation;
}

const ContactInfo = (props: ContactInfoProps)=>{

    return(
<>
<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget widget-contact mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3">{props.title}</h4>
					<div className="divider mb-4"></div>

					<div className="footer-contact-block mb-4">
						<div className="icon d-flex align-items-center">
							<i className="icofont-email mr-3"></i>
							<span className="h6 mb-0">{props.data.address}</span>
						</div>
						<h4 className="mt-2"><a href="tel:+23-345-67890">{props.data?.email}</a></h4>
					</div>

					<div className="footer-contact-block">
						<div className="icon d-flex align-items-center">
							<i className="icofont-support mr-3"></i>
							<span className="h6 mb-0">{props.data?.timing}</span>
						</div>
						<h4 className="mt-2"><a href="tel:+23-345-67890">{props.data?.phoneNumber}</a></h4>
					</div>
				</div>
			</div>
		
</>

    );
};

export default ContactInfo;