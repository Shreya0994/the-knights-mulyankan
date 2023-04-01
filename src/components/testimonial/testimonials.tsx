import Description from "../shared/description";
import Divider from "../shared/divider";
import Heading from "../shared/heading";
import Testimonial from "./testimonial";
import { TestimonialItem, TestimonialsProps } from "@/library/types";

const Testimonials = (props: TestimonialsProps) => {
  return (
    <section className="section testimonial-2 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <Heading title={props.title} />
              <Divider />
              <Description description={props.description} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 testimonial-wrap-2">
            {props.testimonials.map(
              (testimonial: TestimonialItem, index: number) => (
                <Testimonial
                  image={testimonial.image}
                  title={testimonial.title}
                  name={testimonial.name}
                  text={testimonial.text}
                  key={index}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
