export type StatisticItem = {
  statName: string;
  statCount: number;
  statIcon: string;
};

const StatisticItem = (props: StatisticItem) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="counter-stat">
        <i className="icofont-doctor"></i>
        <span className="h3">{props.statCount}</span>
        {props.statIcon}
        <p>{props.statName}</p>
      </div>
    </div>
  );
};

export default StatisticItem;
