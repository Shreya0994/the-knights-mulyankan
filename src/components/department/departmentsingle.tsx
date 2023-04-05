import Image from "next/image";
import { ServiceFeature } from "./deptfeature";

import PageBanner from "../pageBanner/pagebanner";
import TimingSchedule from "./dept-timing-block";
import Link from "next/link";
import { useState } from "react";
import { departmentData } from "@/data/departmentsingle";

type DepartmentProps = {
    id: number,
    image: string,
    deptname: string,
    description: string;
    longdescription: string;
}

const DepartmentSingles = (props: DepartmentProps) => {
    const [image, setImage] = useState(props.image);
    const [deptname, setDeptname] = useState(props.deptname);
    const [description, setDescription] = useState(props.description);
    const [longdescription, setLongdescription] = useState(props.longdescription);
    const [id, setId] = useState(props.id);
    return (

        <>
            <PageBanner subHeading="Single Department" heading="Department Details" />
            <section className="section department-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="department-img">
                                <Image src={departmentData.image} alt="" className="img-fluid" width={1110} height={740} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="department-content mt-5">
                                <h3 className="text-md">{departmentData.deptname}</h3>
                                <div className="divider my-4"></div>
                                <p className="lead">{departmentData.description}</p>
                                <p>{departmentData.longdescription}</p>
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
export default DepartmentSingles;