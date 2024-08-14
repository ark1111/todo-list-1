import PriorityBadge, {
  PriorityType,
} from "../../../components/badge/PriorityBadge";

type Props = {
  priorityType: PriorityType;
  openDrawer: () => void;
};

const ListItem = ({ priorityType, openDrawer }: Props) => {
  return (
    <div
      className="w-full rounded-xl p-6 bg-bg-main cursor-pointer"
      onClick={openDrawer}
    >
      <div className="w-full flex items-center gap-x-3">
        <div className="text-lg text-text-main font-medium">
          code - todo list - front
        </div>
        <PriorityBadge type={priorityType} />
      </div>
      <div className="w-full flex items-center gap-x-5 mt-3">
        <div className="flex items-center gap-x-1 py-px px-2 rounded-full bg-surface-three">
          <div className="text-sm text-text-600">15 Days left</div>
        </div>
        <div className="flex items-center gap-x-1 py-px px-2 rounded-full bg-surface-three">
          <div className="text-sm text-text-600">17</div>
        </div>
        <div className="flex items-center gap-x-1 py-px px-2 rounded-full bg-surface-three">
          <div className="text-sm text-text-600">23</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
