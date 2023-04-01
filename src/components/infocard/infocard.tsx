import CardItem from "@/components/infocard/carditem";
import { InfoCard } from "@/library/types";

type InfoCardProps = {
  cards: InfoCard[];
};

const InfoCard = (props: InfoCardProps) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="feature-block d-lg-flex">
              {props.cards.map((card, index) => (
                <CardItem
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  subHeading={card.subHeading}
                  description={card.description}
                  cta={card.cta}
                  ctaText={card.ctaText}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
