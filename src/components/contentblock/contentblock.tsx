import { ContentBlock } from "@/library/types";
import Image from "next/image";

const ContentBlock = (props: ContentBlock) => {
  return (
    <section className="section about-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="title-color">{props.title}</h2>
          </div>
          <div className="col-lg-8">
            <p>{props.description}</p>
            <Image
              src={props.image}
              alt=""
              className="img-fluid"
              height={79}
              width={230}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContentBlock;
