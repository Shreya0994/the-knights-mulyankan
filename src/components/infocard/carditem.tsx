import Link from "next/link";
import { InfoCard } from "@/library/types";

const CardItem = (props: InfoCard) => {
  return (
    <>
      <div className="feature-item mb-5 mb-lg-0">
        <div className="feature-icon mb-4">
          <i className={props.icon}></i>
        </div>
        <span>{props.subHeading}</span>
        <h4 className="mb-3">{props.title}</h4>
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></p>
        {props.cta && (
          <Link href={props.cta} className="btn btn-main btn-round-full">
            {props.ctaText}
          </Link>
        )}
      </div>
    </>
  );
};

export default CardItem;
