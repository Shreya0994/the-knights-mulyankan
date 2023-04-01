import React from "react";   
import logoimage from "images/logo.png";
import Departments from "./departmentInfo";
import Support from "./supportInfo";
import ContactInfo from "./contactInfo";
import CopyRight from "./copyRight";
import CompanyInfo from "./companyInfo"



const Footer =()=>{


    return(
	<>
   <footer className="footer section gray-bg">
	<div className="container">
		<div className="row">
			
			<Departments title="Departments" department1="Surgery" department2="Medicine"/>
			<Support title="Support" supportInfo1="FAQ"  supportInfo2="Terms"></Support>
			<ContactInfo title="Get In Touch" contactEmail="Support@email.com" contactPhone="+23-456-6588" contactTiming="Mon to Fri : 08:30 - 18:00" contactText="Support Available for 24/7" ></ContactInfo>
			<CopyRight copyRightText=""></CopyRight>
			<CompanyInfo companyDesc="Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus." facebookLink="https://www.facebook.com/themefisher" twitterLink="https://www.twitter.com/themefisher" linkedlnLink="https://www.linkedln.com/themefisher"></CompanyInfo>
     </div>
    </div>
	</footer>

    </>)
}

export default Footer;
