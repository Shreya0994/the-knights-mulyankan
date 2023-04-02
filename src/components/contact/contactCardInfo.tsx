import React from "react";
import { SingleContactCard } from "@/library/types";
import { ContactCards } from "@/data/contact-info-card";

const ContactCardData = {
    cards: ContactCards
}

const ContactCardInfo = () => {
    return (
        <section className="section contact-info pb-0">
            <div className="container">
                <div className="row">

                    {ContactCardData.cards.map((card: SingleContactCard, index: number) =>
                        <div key={index} className="col-lg-4 col-sm-6 col-md-6">
                            <div className="contact-block mb-4 mb-lg-0">
                                <i className={card.logoclass}></i>
                                <h5>{card.text}</h5>
                                {card.subtext}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}
export default ContactCardInfo;