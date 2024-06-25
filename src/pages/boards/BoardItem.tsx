import { BoardsItem } from "./types";

type Props = {
  info: BoardsItem;
};

const BoardItem = ({info}: Props) => {
  return (
    <div className="w-full rounded-xl border-2 border-divider p-4 mb-8">
      <div className="text-xl font-bold text-text-main">{info.title}</div>
      <div className="text-sm text-text-main mt-1">{info.description}</div>
    </div>
  );
};

export default BoardItem;
