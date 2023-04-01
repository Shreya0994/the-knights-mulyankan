import Image from "next/image";
import { Card } from "@/library/types";
import Link from "next/link";
import { Page } from "@/library/types";

type CardProps = {
  cards: Card[];
  page: Page
};

const Cards = (props: CardProps) => {
  
  return (
    <section className="fetaure-page ">
      <div className="container">
        <div className="row">
          {props.cards.map((card, index) => (
            <div key={index} className="col-lg-3 col-md-6">

              { props.page == Page.Deparment ? <Image
                  src={card.image}
                  alt=""
                  className="img-fluid w-100"
                  width={255}
                  height={170}
                /> : ''}
              <div className="about-block-item mb-5 mb-lg-0">
                { props.page == Page.About ? <Image
                  src={card.image}
                  alt=""
                  className="img-fluid w-100"
                  width={255}
                  height={170}
                /> : ''}
                <div className="content">
                  <h4 className="mt-3">{card.title}</h4>
                  <p>{card.description}</p>
                  { props.page == Page.Deparment ? <Link href={card.href} className="read-more">{card.ctaText} <i className="icofont-simple-right ml-2"></i></Link> : ''}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Cards;
