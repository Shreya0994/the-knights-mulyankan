import { StatisticItem as StatisticItemTypings } from "@/library/types";

const StatisticItem = (props: StatisticItemTypings) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="counter-stat">
        <i className={props.statIconClass}></i>
        <span className="h3">{props.statCount}</span>
        {props.statCountPlus}
        <p>{props.statName}</p>
      </div>
    </div>
  );
};

export default StatisticItem;
