import { useState } from "react";
import NewTask from "./NewTask";
import StatusTab from "./StatusTab";
import { BoardStatusType } from "./types";

const Borads = () => {
  const [activeTab, setActiveTab] = useState<BoardStatusType>("OPEN");

  const changeTab = (tab: BoardStatusType) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-full h-[calc(100%-64px)] relative px-6">
      <StatusTab activeTab={activeTab} changeTab={changeTab} />
      <NewTask />
    </div>
  );
};

export default Borads;
