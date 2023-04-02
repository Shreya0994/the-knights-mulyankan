import { ReactElement } from "react";
import Scripts from "@/components/shared/scripts";
import Footer from "@/components/footer/footer";
import Header from "@/components/shared/header/header";
import NextNProgress from "nextjs-progressbar";
// import { ThemeProvider } from "@/context/theme-context";

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <NextNProgress />
      <Header />
      {/* <Scripts /> */}
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
