import { IDepartmentSingle } from "@/library/departmentsingle";
import { NextPageWithLayout } from "@/library/types";
import Head from "next/head";

const DepartmentSingles: NextPageWithLayout<{
    departments: string[];
}> = (props: { departments: string[] }) => {
    return (
        <>
            <Head>
                <title>Department - Novena</title>
            </Head>

        </>
    );
};





export async function getServerSideProps() {
    // Fetch data from external API
    let res = await fetch("http://localhost:3000/api/departments/departmentsingle");
    const departmemt = (await res.json()) as IDepartmentSingle[];


    // Pass data to the page via props
    return {
        props: {
            departments: departmemt,
        },
    };
}
export default DepartmentSingles;