import BlogsLayout from "@/layouts/blogs-layout";
import { IBlogData, IBlog } from "@/library/blogs";
import { NextPageWithLayout } from "@/library/types";
import Head from "next/head";
import { ReactElement } from "react";
import Blogs from "@/components/blogs/blogs";

// blogs will be populated at build time by getStaticProps()
const Blog: NextPageWithLayout<{ data: IBlogData }> = (props) => {
  return (
    <>
      <Head>
        <title>Blogs - Novena</title>
      </Head>
      <Blogs blogs={props.data.data} />
    </>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return <BlogsLayout>{page}</BlogsLayout>;
};

// This gets called on every request
export async function getStaticProps() {
  const blogAPI = "https://sample-apis.azurewebsites.net/api/open/posts";

  // Fetch data from external API
  const res = await fetch(blogAPI);
  const data = (await res.json()) as IBlogData;

  // Pass data to the page via props
  return {
    props: {
      data: data,
    },
  };
}

export default Blog;
