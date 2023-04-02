import Image from "next/image";
import { IDoctor } from "@/library/doctors";
import Divider from "../shared/divider";
import Heading from "../shared/heading";
import Description from "../shared/description";
import { useEffect, useState } from "react";

type SpecialistProps = {
  heading: string;
  description: string;
  department: string;
};

const Specialist = (props: SpecialistProps) => {
  const [specialists, setSpecialists] = useState<IDoctor[] | null>(null);

  useEffect(() => {
    fetch(`/api/doctors?department=${props.department}`)
      .then((res) => res.json())
      .then((data) => {
        setSpecialists(data);
      });
  }, [props.department]);

  return (
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
          {specialists &&
            specialists.map((specialist: IDoctor, index: number) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                <div className="team-block mb-5 mb-lg-0">
                  <Image
                    src={specialist.image}
                    alt="specialist"
                    className="img-fluid w-100"
                    width={255}
                    height={255}
                  />
                  <div className="content">
                    <h4 className="mt-4 mb-0">
                      <a href="doctor-single.html">{specialist.name}</a>
                    </h4>
                    <p>{specialist.subHeading}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Specialist;
