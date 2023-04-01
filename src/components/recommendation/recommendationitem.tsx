import { TestimonialItem } from "@/library/types";

const RecommendationItem = (props: TestimonialItem) => {
  return (
    <div className="testimonial-block">
      <div className="client-info ">
        <h4>{props.title}</h4>
        <span>{props.name}</span>
      </div>
      <p>{props.text}</p>
      <i className="icofont-quote-right"></i>
    </div>
  );
};
export default RecommendationItem;
