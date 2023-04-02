import { ReactElement, useEffect } from "react";
import Scripts from "@/components/shared/scripts";
import Footer from "@/components/footer/footer";
import Header from "@/components/shared/header/header";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
// import { ThemeProvider } from "@/context/theme-context";

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Head>
        <script async src="/assets/plugins/jquery/jquery.js" />
        <script async src="/assets/plugins/bootstrap/js/popper.js" />
        <script async src="/assets/plugins/bootstrap/js/bootstrap.js" />
        <script async src="/assets/plugins/counterup/jquery.easing.js" />
        <script async src="/assets/plugins/slick-carousel/slick/slick.min.js" />
        <script async src="/assets/plugins/counterup/jquery.waypoints.min.js" />
        <script async src="/assets/plugins/shuffle/shuffle.min.js" />
        <script async src="/assets/plugins/counterup/jquery.counterup.min.js" />
        {/* <script async src="/assets/js/script.js" /> */}
      </Head>
      <NextNProgress />
      <Header />
      {/* <Scripts /> */}
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
