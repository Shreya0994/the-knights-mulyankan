import Doctors from "@/components/doctors/doctors";
import PageBanner from "@/components/pageBanner/pagebanner";
import { IDoctor } from "@/library/doctors";
import { NextPageWithLayout } from "@/library/types";
import Head from "next/head";

const Doctor: NextPageWithLayout<{
  doctors: IDoctor[];
  departments: string[];
}> = (props) => {
  return (
    <>
      <Head>
        <title>Doctors - Novena</title>
      </Head>
      <PageBanner heading={"All Doctors"} subHeading={"Specialized Doctors"} />
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
export async function getStaticProps() {
  const apiHost = process.env.API_HOST;

  // Fetch data from external API
  let res = await fetch(`https://the-knights-novena.vercel.app/api/doctors`);
  const doctors = (await res.json()) as IDoctor[];

  res = await fetch(
    `https://the-knights-novena.vercel.app/api/doctors/departments`
  );
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
