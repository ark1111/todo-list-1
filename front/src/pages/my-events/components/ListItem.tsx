import PriorityBadge, {
  PriorityType,
} from "../../../components/badge/PriorityBadge";

type Props = {
  priorityType: PriorityType;
};

const ListItem = ({ priorityType }: Props) => {
  return (
    <div className="w-full rounded-xl p-6 bg-bg-main">
      <div className="w-full flex items-center gap-x-3">
        <div className="text-lg text-text-main font-medium">
          code - todo list - front
        </div>
        <PriorityBadge type={priorityType} />
      </div>
    </div>
  );
};

export default ListItem;
