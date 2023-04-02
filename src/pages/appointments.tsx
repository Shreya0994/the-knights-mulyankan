import { IAppointment, NextPageWithLayout } from "@/library/types";
import PageBanner from "@/components/pageBanner/pagebanner";
import { ReactElement, useEffect, useState } from "react";
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import Head from "next/head";
import { useAuthContext } from "@/context/auth-context";

// export async function getServerSideProps() {
//   const res = await fetch(
//     "https://sample-apis.azurewebsites.net/api/open/appointments"
//   );
//   const allAppointments = await res.json();
//   return {
//     props: { allAppointments },
//   };
// }

const Appointment: NextPageWithLayout = () => {
  const [appointments, setAppointments] = useState<any>(null);
  const authContext = useAuthContext();

  const loadData = async () => {
    const res = await fetch(
      "https://sample-apis.azurewebsites.net/api/open/appointments"
    );
    const allAppointments = await res.json();
    setAppointments(allAppointments);
  };

  useEffect(() => {
    loadData();
  }, [authContext]);

  return (
    <>
      {authContext.user && (
        <>
          <Head>
            <title>Appointments - Novena</title>
          </Head>
          <PageBanner subHeading="All Appointment" heading="All Appointment" />
          <div className="container">
            <br />
            <table className="table" style={{ width: "100%" }}>
              <thead>
                <tr style={{ border: "1px solid #dddddd" }}>
                  <th style={{ border: "1px solid #dddddd" }}>Doctor</th>
                  <th style={{ border: "1px solid #dddddd" }}>Department</th>
                  <th style={{ border: "1px solid #dddddd" }}>Patient Name</th>
                  <th style={{ border: "1px solid #dddddd" }}>Patient Phone</th>
                  <th style={{ border: "1px solid #dddddd" }}>Message</th>
                  <th style={{ border: "1px solid #dddddd" }}>
                    Appointment Date
                  </th>
                  <th style={{ border: "1px solid #dddddd" }}>
                    Appointment Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments &&
                  appointments.map((app: any, index: number) => (
                    <tr key={index} style={{ border: "1px solid #dddddd" }}>
                      <td style={{ border: "1px solid #dddddd" }}>
                        {app.doctor}
                      </td>
                      <td style={{ border: "1px solid #dddddd" }}>
                        {app.department}
                      </td>
                      <td style={{ border: "1px solid #dddddd" }}>
                        {app.full_name}
                      </td>
                      <td style={{ border: "1px solid #dddddd" }}>
                        {app.phone_number}
                      </td>
                      <td style={{ border: "1px solid #dddddd" }}>
                        {app.message}
                      </td>
                      <td style={{ border: "1px solid #dddddd" }}>
                        {app.date}
                      </td>
                      <td style={{ border: "1px solid #dddddd" }}>
                        {app.time}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      {!authContext.user && <></>}
    </>
  );
};

Appointment.getLayout = function getLayout(page: ReactElement) {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};

export default Appointment;
