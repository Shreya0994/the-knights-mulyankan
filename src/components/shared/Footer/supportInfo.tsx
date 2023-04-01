import React  from "react";

type SupportProps={
    title: string;
    supportInfo1: string;
    supportInfo2: string;
}

const Support =(props: SupportProps)=>
{
   return(
    <>
    <div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3">{props.title}</h4>
					<div className="divider mb-4"></div>

					<ul className="list-unstyled footer-menu lh-35">
						<li><a href="#">{props.supportInfo1}</a></li>
						<li><a href="#">{props.supportInfo2}</a></li>
						{/* <li><a href="#">Company Support </a></li>
						<li><a href="#">FAQuestions</a></li>
						<li><a href="#">Company Licence</a></li> */}
					</ul>
				</div>
			</div>
    </>
   );
};

export default Support;