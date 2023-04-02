import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextPageWithLayout } from "@/library/types";
import Head from "next/head";
import PageBanner from "@/components/pageBanner/pagebanner";
import { IBlog, IBlogData, Params } from "@/library/blogs";

type BlogDetailsProps = {
  blog: IBlog;
};

// blogs will be populated at build time by getStaticProps()
const BlogDetails: NextPageWithLayout<BlogDetailsProps> = (props) => {
  return (
    <>
      <Head>
        <title>Blogs - Novena</title>
      </Head>
      <PageBanner heading="Blog Details" subHeading={props.blog.title} />
      <BlogDetails blog={props.blog} />
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogDetailsProps, Params> = async (
  context
) => {
  const { blogid } = context.params!;
  const apiHost = `https://sample-apis.azurewebsites.net/api/open/posts/${blogid}`;

  // Fetch data from external API
  const res = await fetch(apiHost);
  const blog = (await res.json()) as IBlog;

  // Pass data to the page via props
  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const blogAPI = "https://sample-apis.azurewebsites.net/api/open/posts";

  // Call an external API endpoint to get posts
  const res = await fetch(blogAPI);
  const blogData = (await res.json()) as IBlogData;

  // Get the paths we want to pre-render based on posts
  const paths = blogData.data.map((blog: IBlog) => ({
    params: { blogid: blog.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export default BlogDetails;
