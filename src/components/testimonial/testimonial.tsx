import { TestimonialItem } from "@/library/types";
import Image from "next/image";

const Testimonial = (props: TestimonialItem) => {
  return (
    <div className="testimonial-block style-2  gray-bg">
      <i className="icofont-quote-right"></i>

      <div className="testimonial-thumb">
        <Image
          src={props.image}
          alt=""
          className="img-fluid"
          width={70}
          height={70}
        />
      </div>

      <div className="client-info ">
        <h4>{props.title}</h4>
        <span>{props.name}</span>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Testimonial;
