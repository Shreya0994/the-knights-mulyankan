import Image from "next/image";
import Heading from "../shared/heading";
import Divider from "../shared/divider";
import Description from "../shared/description";
import { IDoctor } from "@/library/doctors";
import Link from "next/link";
import { useState } from "react";

type DoctorsProps = {
  title: string;
  description: string;
  doctors: IDoctor[];
  departments: string[];
};

const Doctors = (props: DoctorsProps) => {
  const [doctors, setDoctors] = useState(props.doctors);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  function setDoctorsHandler(
    e: React.MouseEvent<HTMLButtonElement>,
    departmentName: string
  ) {
    if (departmentName != "") {
      const filteredDoctors = props.doctors.filter(
        (doctor) =>
          doctor.department.toLowerCase() === departmentName.toLowerCase()
      );
      setDoctors(filteredDoctors);
    } else {
      setDoctors(props.doctors);
    }

    setSelectedDepartment(departmentName);
  }

  return (
    <>
      <section className="section doctors">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <Heading title={props.title} />
                <Divider />
                <Description description={props.description} />
              </div>
            </div>
          </div>

          <div className="col-12 text-center  mb-5">
            <div className="btn-group btn-group-toggle " data-toggle="buttons">
              <button
                className={`btn ${selectedDepartment === "" ? "active" : ""}`}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  setDoctorsHandler(e, "")
                }
              >
                All Department
              </button>
              {props.departments.map((department: string, index: number) => (
                <button
                  className={`btn ${
                    selectedDepartment === department ? "active" : ""
                  }`}
                  key={index}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    setDoctorsHandler(e, department)
                  }
                >
                  {department}
                </button>
              ))}
            </div>
          </div>

          <div className="row shuffle-wrapper portfolio-gallery">
            {doctors.map((doctor: IDoctor, index: number) => (
              <div
                key={index}
                className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
                data-id={doctor.id}
              >
                <div className="position-relative doctor-inner-box">
                  <div className="doctor-profile">
                    <div className="doctor-img">
                      <Image
                        src={doctor.image}
                        alt="doctor-image"
                        className="img-fluid w-100"
                        width={255}
                        height={255}
                      />
                    </div>
                  </div>
                  <div className="content mt-3">
                    <h4 className="mb-0">
                      <Link href={`/doctors/${doctor.id}`}>{doctor.name}</Link>
                    </h4>
                    <p>{doctor.department}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
