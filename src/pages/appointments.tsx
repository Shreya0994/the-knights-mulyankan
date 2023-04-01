import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { NextPageWithLayout } from "@/library/types";
import { ReactElement } from "react";

const Appointments: NextPageWithLayout = () => {
  return <>Appointments</>;
};

Appointments.getLayout = function getLayout(page: ReactElement) {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>;
};

export default Appointments;
