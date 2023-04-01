import { ReactElement } from "react";
import Scripts from "@/components/shared/scripts";
import Header from "@/components/shared/header/header";
// import { ThemeProvider } from "@/context/theme-context";

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <h1>The Knights</h1>
      <Scripts />
      {children}
    </>
  );
};

export default DefaultLayout;
