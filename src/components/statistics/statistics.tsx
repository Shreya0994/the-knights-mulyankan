import StatisticItem from "./statisticitem";
import { StatisticItem as StatisticsItemTypings } from "./statisticitem";

const statisticsData: StatisticsItemTypings[] = [
  {
    statName: "Happy People",
    statCount: 58,
    statIcon: "k",
  },
  {
    statName: "Surgery Comepleted",
    statCount: 700,
    statIcon: "+",
  },
  { statName: "Expert Doctors", statCount: 40, statIcon: "+" },
  { statName: "Worldwide Branch", statCount: 20, statIcon: "" },
];

type StatisticsProps = {
  statisticItems: StatisticsItemTypings[];
};

const Statistics = (props: StatisticsProps) => {
  <>
    <section className="cta-section ">
      <div className="container">
        <div className="cta position-relative">
          <div className="row">
            {props.statisticItems.map((item) => (
              <StatisticItem
                statName={item.statName}
                statCount={item.statCount}
                statIcon={item.statIcon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default Statistics;
