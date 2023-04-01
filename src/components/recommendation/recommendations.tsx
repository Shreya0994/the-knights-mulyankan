import Divider from "../shared/divider";
import Heading from "../shared/heading";
import RecommendationItem from "./recommendationitem";
import { ReccomendationsProps, TestimonialItem } from "@/library/types";

const Recommendations = (props: ReccomendationsProps) => {
  return (
    <section className="section testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="section-title">
              <Heading className="mb-4" title={props.title} />
              <Divider />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 testimonial-wrap offset-lg-6">
            {props.testimonials.map(
              (testimonial: TestimonialItem, index: number) => (
                // <RecommendationItem image={testimonial.image} title={testimonial.title} name={testimonial.name} text={testimonial.text} />
                <RecommendationItem {...testimonial} key={index} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Recommendations;
