import { IBlog } from "@/library/blogs";
import Image from "next/image";

type BlogDetailsProps = {
  blog: IBlog;
};

const BlogDetails = (props: BlogDetailsProps) => {
  return (
    <section className="section blog-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div className="single-blog-item">
                  <Image
                    src="https://themewagon.github.io/novena/images/blog/blog-1.jpg"
                    alt=""
                    className="img-fluid"
                    width={730}
                    height={487}
                  />

                  <div className="blog-item-content mt-5">
                    <div className="blog-item-meta mb-3">
                      <span className="text-black text-capitalize mr-3">
                        <i className="icofont-calendar mr-2"></i>
                        {new Date(props.blog.created_at).toDateString()}
                      </span>
                    </div>

                    <h2 className="mb-4 text-md">{props.blog.title}</h2>

                    <p className="lead mb-4">{props.blog.excerpt}</p>

                    <p>{props.blog.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
