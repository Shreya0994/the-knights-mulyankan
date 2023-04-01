import StatisticItem from "./statisticitem";
import { StatisticItem as StatisticItemTypings } from "@/library/types";

type StatisticsProps = {
  statisticItems: StatisticItemTypings[];
};

const Statistics = (props: StatisticsProps) => {
  return (
    <section className="cta-section ">
      <div className="container">
        <div className="cta position-relative">
          <div className="row">
            {props.statisticItems.map(
              (item: StatisticItemTypings, index: number) => (
                <StatisticItem
                  statName={item.statName}
                  statCount={item.statCount}
                  statCountPlus={item.statCountPlus}
                  statIconClass={item.statIconClass}
                  key={index}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
