import Image from "next/image";
import Doctor from "../Doctors/doctors";
import { DoctorList } from '@/data/doctor-list'
import Divider from "../shared/divider";
import Heading from "../shared/heading";
import Description from "../shared/description";

type SpecialistProps = {
  heading: string
  description: string
};

const Specialist = (props: SpecialistProps) => {
  return (
    <>
      <section className="section team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <Heading className="mb-4" title={props.heading} />
                <Divider />
                <Description description={props.description} />
              </div>
            </div>
          </div>
          <div className="row">
            {DoctorList.filter((doctor:Doctor,index) => index < 4).map( (doctor:Doctor, index) => ( 
              <Doctor key={index} data={doctor}/>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Specialist;
