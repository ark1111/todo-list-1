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
      </div>
    </div>
  );
};

export default TaskDrawer;
