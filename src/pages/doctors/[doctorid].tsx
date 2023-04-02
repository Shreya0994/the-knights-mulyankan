import PageBanner from "@/components/pageBanner/pagebanner";
import { DoctorDetails } from "@/components/doctors/doctor-details";
import { IDoctor, Params } from "@/library/doctors";
import { GetStaticPaths, GetStaticProps } from "next";

type DoctorProps = {
  doctor: IDoctor;
};

const Doctor = (props: DoctorProps) => {
  return (
    <>
      <PageBanner subHeading="Doctor Details" heading={props.doctor.name} />
      <DoctorDetails doctor={props.doctor} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const apiHost = process.env.API_HOST;

  // Fetch data from external API
  const res = await fetch(`${apiHost}/api/doctors`);
  const doctors = (await res.json()) as IDoctor[];

  const paths = doctors.map((d: IDoctor) => ({
    params: { doctorid: d.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DoctorProps, Params> = async (
  context
) => {
  const doctorId = context.params?.doctorid;
  const res = await fetch(`http://localhost:3000/doctors/${doctorId}`);
  const doctor: IDoctor = await res.json();

  return {
    props: { doctor },
  };
};

export default Doctor;
