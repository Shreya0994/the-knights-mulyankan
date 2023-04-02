import Doctors from "@/components/Doctors/doctors";
import { IDoctor } from "@/library/doctors";
import { NextPageWithLayout } from "@/library/types";
import Head from "next/head";

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
  // Fetch data from external API
  let res = await fetch("http://localhost:3000/api/doctors");
  const doctors = (await res.json()) as IDoctor[];

  res = await fetch("http://localhost:3000/api/doctors/departments");
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
