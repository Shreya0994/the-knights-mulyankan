import { AuthContextProvider } from "@/context/auth-context";
import { ReactElement } from "react";
import Scripts from "@/components/shared/scripts";
import Head from "next/head";
import Footer from "@/components/footer/footer";

type AuthenticatedLayoutProps = {
  children: ReactElement;
};

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <Scripts />
      </Head>
      <AuthContextProvider>
        <>
          {children}
          <Footer />
        </>
      </AuthContextProvider>
    </>
  );
};

export default AuthenticatedLayout;
