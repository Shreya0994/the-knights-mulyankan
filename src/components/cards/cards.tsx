import Image from "next/image";
import { Card } from "@/library/types";

type CardProps = {
  cards: Card[];
};
const Cards = (props: CardProps) => {
  return (
    <section className="fetaure-page ">
      <div className="container">
        <div className="row">
          {props.cards.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="about-block-item mb-5 mb-lg-0">
                <Image
                  src={card.image}
                  alt=""
                  className="img-fluid w-100"
                  width={255}
                  height={170}
                />
                <h4 className="mt-3">{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Cards;