import QuickBet from "../quick-bet";
import StatisticIcon from "../statistic-icon";
import "./round-result.scss";
const RoundResult = (data: any) => {
  return (
    <div className="round-result-container flex justify-between">
      <div className="flex items-center gap-2">
        <span className="id">#{data.roundId}</span>
        {data.resultData.map((items: any) => (
          <div className="result flex items-center" key={items.betChoiceShort}>
            <span>{items.count}</span>
            <StatisticIcon
              betChoice={items.betChoiceShort}
              bgColor={items.color}
            />
          </div>
        ))}
      </div>
      <QuickBet />
    </div>
  );
};
export default RoundResult;
