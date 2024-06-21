import { BoardStatusType } from "./types";

type Props = {
  activeTab: BoardStatusType;
  changeTab: (tabName: BoardStatusType) => void;
};

const tabs: {
  id: number;
  title: string;
  value: BoardStatusType;
  color: string;
}[] = [
  {
    id: 1,
    title: "Open",
    value: "OPEN",
    color: "#686D76",
  },
  {
    id: 2,
    title: "In Progress",
    value: "IN_PROGRESS",
    color: "#EE4E4E",
  },
  {
    id: 3,
    title: "Done",
    value: "DONE",
    color: "#219C90",
  },
];

const StatusTab = ({ activeTab, changeTab }: Props) => {
  const counts = [3, 5, 11];
  return (
    <div className="w-full flex items-center">
      {tabs.map((item, index) => (
        <div className="flex-1 h-20 shrink-0 relative flex items-center justify-center gap-x-1">
          <div
            className="text-base md:text-xl text-text-main cursor-pointer font-medium"
            onClick={() => changeTab(item.value)}
          >
            {item.title}
          </div>
          <div
            className={`w-6 h-6 text-xs rounded-full flex items-center justify-center border-[1.5px] border-divider text-white`}
            style={{ backgroundColor: item.color }}
          >
            {counts[index] < 10 ? counts[index] : "+9"}
          </div>
          <div
            className={`${
              activeTab === item.value ? "w-full" : "w-0"
            } h-1 bg-primary transition-all duration-300 absolute bottom-0 left-0`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default StatusTab;
