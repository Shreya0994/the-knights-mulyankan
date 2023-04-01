import Link from "next/link";
import React from "react";

type CopyRightProps={
    copyRightText: string;
	
	

}

const CopyRight=(props:CopyRightProps)=>
{
    return(<>
    <div className="footer-btm py-4 mt-5">
			<div className="row align-items-center justify-content-between">
				<div className="col-lg-6">
					
					
<div className="copyright" dangerouslySetInnerHTML={{__html: props.copyRightText}}></div>
                       
				</div>
				<div className="col-lg-6">
					<div className="subscribe-form text-lg-right mt-5 mt-lg-0">
						<form action="#" className="subscribe">
							 <input type="text" className="form-control" placeholder="Your Email address"/> 
							<Link href="#" className="btn btn-main-2 btn-round-full">Subscribe</Link>
						</form>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4">
					<a className="backtop js-scroll-trigger" href="#top">
						<i className="icofont-long-arrow-up"></i>
					</a>
				</div>
			</div>
		</div>
    
	
	
    </>
    );

};
export default CopyRight;