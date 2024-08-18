import PriorityBadge from "../../../components/badge/PriorityBadge";
import "./TaskDrawer.style.css";
type Props = {
  closeDrawer: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const TaskDrawer = ({ closeDrawer }: Props) => {
  return (
    <div className="w-full relative z-40">
      <div
        className="fixed h-screen w-screen top-0 left-0 z-40 bg-[#11111122] task-drawer-back"
        onClick={(e) => closeDrawer(e)}
      ></div>
      <div className="fixed  w-[900px] h-screen bg-bg-main top-0 right-0 z-50 shadow-xl task-drawer-inner">
        {/* --header--- */}
        <div className="w-full h-20 flex items-center justify-between px-8 border-b border-divider-main">
          <div className="flex items-center gap-x-6">
            <div className="felx items-center gap-x-2 cursor-pointer">
              <div className="text-base font-medium text-text-main">Share</div>
            </div>
            <div className="felx items-center gap-x-2 cursor-pointer">
              <div className="text-base font-medium text-text-main">Expand</div>
            </div>
          </div>
        </div>
        {/* --body--- */}
        <div className="w-full py-6 px-8">
          <div className="w-full text-4xl font-medium text-text-main">
            code - todo list - front
          </div>
          <div className="w-full flex items-center gap-x-3 mt-5">
            <PriorityBadge type={"High"} />
            <div className="px-3 py-1 rounded-full text-sm border border-divider-main text-text-main">
              Jul 10 - 14
            </div>
          </div>
          <div className="w-full px-3 rounded-lg py-2 flex items-center justify-between mt-8 bg-gradient-to-r from-[#e4c3da] to-[#d3bae8]">
            <div className="flex items-center gap-x-2">
              <div className="text-sm text-text-main font-medium">
                Time Spent on this project
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="text-xl text-text-main font-semibold">
                99:30:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDrawer;
