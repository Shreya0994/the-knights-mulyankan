import { AuthContextProvider } from "@/context/auth-context";
import { ReactElement } from "react";
import Scripts from "@/components/shared/scripts";
import Head from "next/head";
import Footer from "@/components/footer/footer";
import Header from "@/components/shared/header/header";

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
          <Header />
          {children}
          <Footer />
        </>
      </AuthContextProvider>
    </>
  );
};

export default AuthenticatedLayout;
