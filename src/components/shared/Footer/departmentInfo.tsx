import React from "react"

type DepartmentProps={
    title :string;
    department1: string;
    department2: string;
};


const Departments =(props: DepartmentProps)=>{
    return(
        <>
        <div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget mb-5 mb-lg-0">
					<h4 className="text-capitalize mb-3">{props.title}</h4>
					<div className="divider mb-4"></div>

					<ul className="list-unstyled footer-menu lh-35">
						<li><a href="#">{props.department1} </a></li>
						<li><a href="#">{props.department2}</a></li>
						
					</ul>
				</div>
			</div>
        </>
    );
};

export default Departments;