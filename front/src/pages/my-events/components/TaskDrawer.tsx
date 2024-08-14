type Props = {
  closeDrawer: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const TaskDrawer = ({ closeDrawer }: Props) => {
  return (
    <div className="w-full relative z-40">
      <div
        className="fixed h-screen w-screen top-0 left-0 z-40 bg-[#11111105]"
        onClick={(e) => closeDrawer(e)}
      ></div>
      <div className="fixed  w-[900px] h-screen bg-bg-main top-0 right-0 z-50 shadow-xl"></div>
    </div>
  );
};

export default TaskDrawer;
