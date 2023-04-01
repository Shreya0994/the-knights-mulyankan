import { ReactElement } from "react";
import Scripts from "@/components/shared/scripts";
<<<<<<< HEAD
import Header from "@/components/shared/header/header";
=======
import Footer from "@/components/footer/footer";
>>>>>>> main
// import { ThemeProvider } from "@/context/theme-context";

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <h1>The Knights</h1>
      <Scripts />
      {children}
=======
      <Scripts />
      {children}
      <Footer />
>>>>>>> main
    </>
  );
};

export default DefaultLayout;
