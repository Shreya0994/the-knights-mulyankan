// import PageBanner from "@/components/pageBanner/pagebanner";
// import { DoctorsDetails } from "@/components/Doctors/doctors-details";
// import { IDoctor } from "@/library/doctors";

// type Param = {
//   id: string;
//   fallback: boolean;
// };

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:3000/api/doctors");
//   let data: IDoctor[] = await res.json();

//   const path = data.map((doctor) => {
//     return {
//       param: { doctorId: doctor.id.toString() },
//     };
//   });
//   return {
//     path,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context: Param) => {
//   const doctorId = context.id;

//   const res = await fetch(`http://localhost:3000/doctors/${doctorId}`);
//   const data: IDoctor = await res.json();

//   return {
//     props: { doctors: data },
//   };
// };

// const DepartmentSingle = (props: IDoctor) => {
//   return (
//     <>
//       {props.name}
//       {/* <PageBanner subHeading="Doctor Details" heading={props.name} /> */}
//       {/* <DoctorsDetails doctor={props} /> */}
//     </>
//   );
// };
// export default DepartmentSingle;
