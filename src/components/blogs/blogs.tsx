import { IBlog } from "@/library/blogs";
import Image from "next/image";
import Link from "next/link";

type BlogProps = {
  blogs: IBlog[];
};

const Blogs = (props: BlogProps) => {
  return (
    <div className="row">
      {props.blogs.map((blog: IBlog, index: number) => (
        <div className="col-lg-12 col-md-12 mb-5" key={blog.id}>
          <div className="blog-item">
            <div className="blog-thumb">
              <Image
                src="https://themewagon.github.io/novena/images/blog/blog-4.jpg"
                alt=""
                className="img-fluid"
                width={730}
                height={487}
              />
            </div>

            <div className="blog-item-content">
              <div className="blog-item-meta mb-3 mt-4">
                {/* <span className="text-muted text-capitalize mr-3">
                  <i className="icofont-comment mr-2"></i>5 Comments
                </span> */}
                <span className="text-black text-capitalize mr-3">
                  <i className="icofont-calendar mr-1"></i>{" "}
                  {new Date(blog.created_at).toDateString()}
                </span>
              </div>

              <h2 className="mt-3 mb-3">
                <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              </h2>

              <p className="mb-4">{blog.excerpt}</p>

              <Link
                href={`/blogs/${blog.id}`}
                className="btn btn-main btn-icon btn-round-full"
              >
                Read More <i className="icofont-simple-right ml-2  "></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
