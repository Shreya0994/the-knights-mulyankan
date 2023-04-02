import Doctors from "@/components/doctors/doctors";
import { IDoctor } from "@/library/doctors";
import { NextPageWithLayout } from "@/library/types";
import Head from "next/head";
import appConfig from "@/library/configuration";

// doctors will be populated at build time by getStaticProps()
const Doctor: NextPageWithLayout<{
  doctors: IDoctor[];
  departments: string[];
}> = (props: { doctors: IDoctor[]; departments: string[] }) => {
  return (
    <>
      <Head>
        <title>Doctors - Novena</title>
      </Head>
      <Doctors
        title="Doctors"
        description="We provide a wide range of creative services adipisicing elit. Autem maxime rem modi eaque, voluptate. Beatae officiis neque"
        doctors={props.doctors}
        departments={props.departments}
      />
    </>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  const apiHost = process.env.API_HOST;

  // Fetch data from external API
  let res = await fetch(`${apiHost}/api/doctors`);
  const doctors = (await res.json()) as IDoctor[];

  res = await fetch(`${apiHost}/api/doctors/departments`);
  const departments = (await res.json()) as string[];

  // Pass data to the page via props
  return {
    props: {
      doctors: doctors,
      departments: departments,
    },
  };
}

export default Doctor;
