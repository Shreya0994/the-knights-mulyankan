import React from "react";
import Cards from "@/components/cards/cards";
import { CardsItems } from "@/data/cards";
import PageBanner from "@/components/pageBanner/pagebanner";
import ContentBlock from "@/components/contentblock/contentblock";
import { Card, InfoCard, NextPageWithLayout, Page } from "@/library/types";
import Specialist from "@/components/specialists/specialists";
import { ReccomendationsData } from "@/data/reccomendations";
import Recommendations from "@/components/recommendation/recommendations";
import Head from "next/head";



export async function getServerSideProps() {
  let res = await fetch("http://localhost:3000/api/cards");
  const cards = (await res.json()) as Card[];
  return {
    props: {
      cards: cards,
    },
  };
}



const About: NextPageWithLayout<{ cards: Card[] }> = (props: { cards: Card[] }) => {


  return (
    <>
      <Head>
        <title>About - Novena</title>
      </Head>
      <PageBanner subHeading="About Us" heading="About Us" />
      <ContentBlock
        title="Award winning patient care"
        description="Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat."
        image="https://themewagon.github.io/novena/images/about/sign.png"
      />

      <Cards cards={props.cards} page={Page.About} />

      <Specialist
        heading="Meet Our Specialist"
        description="Today’s users expect effortless experiences. Don’t let essential people and processes stay stuck in the past. Speed it up, skip the hassles"
        department="Cardiology"
      />
      <Recommendations
        title={ReccomendationsData.title}
        testimonials={ReccomendationsData.testimonials}
      />
    </>
  );
};
export default About;
