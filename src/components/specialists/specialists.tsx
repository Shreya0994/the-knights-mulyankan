import Image from "next/image";
import Doctor from "../Doctors/doctors";
import Divider from "../shared/divider";
import Heading from "../shared/heading";
import Description from "../shared/description";
import { SpecialistPageComponent } from "@/data/doctor-list";

const Specialist = () => {
  return (
    <>
      <section className="section team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <Heading className="mb-4" title={SpecialistPageComponent.promo.title} />
                <Divider />
                <Description description={SpecialistPageComponent.promo.description} />
              </div>
            </div>
          </div>
          <div className="row">
            {SpecialistPageComponent.doctorItems.filter((doctorItems: Doctor, index) => index < 4).map((doctor: Doctor, index) => (
              <Doctor key={index} data={doctor} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Specialist;
