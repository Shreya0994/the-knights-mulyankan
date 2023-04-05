import { ReactElement } from "react";
import Footer from "@/components/footer/footer";
import Header from "@/components/shared/header/header";
import NextNProgress from "nextjs-progressbar";
import PageBanner from "@/components/pageBanner/pagebanner";
// import { ThemeProvider } from "@/context/theme-context";

const BlogsLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <NextNProgress />
      <Header />
      <PageBanner heading="Our blog" subHeading="Blog Articles" />
      <section className="section blog-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">{children}</div>
            <div className="col-lg-4">Filters Coming Soon</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogsLayout;
