import { useState } from "react";
import ListItem from "./ListItem";
import TaskDrawer from "./TaskDrawer";

type Props = {
  title: string;
  length: number;
};

const List = ({ title, length }: Props) => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

   const openDrawer = () => {
     setIsDrawerOpen(true);
   };

   const closeDrawer = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
     e.preventDefault();
     setIsDrawerOpen(false);
   };
  return (
    <div className="w-full p-4 rounded-xl bg-surface-one">
      <div className="flex items-center gap-x-1">
        <div className="text-base font-medium text-text-800">{title}</div>
        <div className="text-base font-medium text-text-800 px-1 rounded bg-surface-two">
          {length}
        </div>
      </div>
      <div className="w-full mt-5 flex flex-col gap-y-5">
        <ListItem priorityType="Low" openDrawer={openDrawer} />
        <ListItem priorityType="High" openDrawer={openDrawer} />
        <ListItem priorityType="Medium" openDrawer={openDrawer} />
      </div>
      {isDrawerOpen && <TaskDrawer closeDrawer={closeDrawer} />}
    </div>
  );
};

export default List;
