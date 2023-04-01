import { ReactElement } from "react";
import Scripts from "@/components/shared/scripts";
import Footer from "@/components/footer/footer";
import Header from "@/components/shared/header/header";
// import { ThemeProvider } from "@/context/theme-context";

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <Scripts />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
