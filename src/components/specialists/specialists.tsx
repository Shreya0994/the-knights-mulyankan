import Image from "next/image";
import Doctor from "./doctors";
import { DoctorList } from '@/data/doctor-list'

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
                <h2 className="mb-4">{props.heading}</h2>
                <div className="divider mx-auto my-4"></div>
                <p>{props.description}</p>
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
