import { Doctor } from "@/library/types";
import Image from "next/image";

type DoctorListProps = {
    data: Doctor
};

const Doctor = (props: DoctorListProps ) => {
  return (
    <>
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-block mb-5 mb-lg-0">
            <Image src={props.data.image} width={270} height={270} alt="" className="img-fluid w-100" />

            <div className="content">
                <h4 className="mt-4 mb-0"><a href="doctor-single.html">{props.data.name}</a></h4>
                <p>{props.data.designation}</p>
            </div>
            </div>
        </div>
    </>
  );
};

export default Doctor;
