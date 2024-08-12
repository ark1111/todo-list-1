export type PriorityType = "Low" | "Medium" | "High";

const PriorityColorObj = {
  Low: "#DEF9C4",
  Medium: "#b1c1fd",
  High: "#FFA27F",
};

type Props = {
  type: PriorityType;
};

const PriorityBadge = ({ type }: Props) => {
  return (
    <div
      className={`px-3 py-1 rounded-full text-sm font-medium text-text-main`}
      style={{ backgroundColor: PriorityColorObj[type] }}
    >
      {type} Priority
    </div>
  );
};

export default PriorityBadge;
