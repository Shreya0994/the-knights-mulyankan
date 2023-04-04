import { IDoctor } from "@/library/doctors";
import { NextPageWithLayout } from "@/library/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

type DoctorDetailPageProps = {
  doctor: IDoctor | null;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const DoctorDetailPage: NextPageWithLayout<DoctorDetailPageProps> = ({
  doctor,
}) => {
  return (
    <>
      {doctor && (
        <>
          <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block text-center">
                    <span className="text-white">Doctor details</span>
                    <h1 className="text-capitalize mb-5 text-lg">
                      {doctor.name}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section doctor-single">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="doctor-img-block">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      className="img-fluid w-100"
                      width={"270"}
                      height={"270"}
                    />
                    <div className="info-block mt-4">
                      <h4 className="mb-0">{doctor.name}</h4>
                      <p>{doctor.department}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6">
                  <div className="doctor-details mt-4 mt-lg-0">
                    <h2 className="text-md">{doctor.subHeading}</h2>
                    <div className="divider my-4"></div>
                    <p>{doctor.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {!doctor && <></>}
    </>
  );
};

export default DoctorDetailPage;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const apiEndpoint = `https://the-knights-novena.vercel.app/api/doctors`;

  const response = await fetch(apiEndpoint);
  const doctorsData = await response.json();

  const paths = doctorsData.map((d: any) => ({
    params: { id: d.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  DoctorDetailPageProps,
  Params
> = async (context) => {
  const { id } = context.params!;
  const apiEndpoint = `https://the-knights-novena.vercel.app/api/doctors/${id}`;
  const response = await fetch(apiEndpoint);
  let doctorData = null;
  if (response.status === 200) {
    doctorData = (await response.json()) as IDoctor;
  }
  return {
    props: {
      doctor: doctorData,
    },
  };
};
