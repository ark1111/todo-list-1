import React from "react";

type Props = {
  title: string;
  length: number;
};

const List = ({title,length}: Props) => {
  return (
    <div className="w-full p-4 rounded-xl bg-surface-one">
      <div className="flex items-center gap-x-1">
        <div className="text-base font-medium text-text-800">{title}</div>
        <div className="text-base font-medium text-text-800 px-1 rounded bg-surface-two">{length}</div>
      </div>
    </div>
  );
};

export default List;
