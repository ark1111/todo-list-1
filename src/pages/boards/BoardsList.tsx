import BoardItem from "./BoardItem";
import { BoardsItem } from "./types";

const list: BoardsItem[] = [
  {
    id: 1,
    title: "Login page",
    description: "Design login page",
    images: [],
    attachment: [],
    members: [],
  },
  {
    id: 2,
    title: "Register page",
    description: "Design register page",
    images: [],
    attachment: [],
    members: [],
  },
];
const BoardsList = () => {
  return (
    <div className="w-full mt-8">
      {list.map((item) => (
        <BoardItem key={item.id} info={item} />
      ))}
    </div>
  );
};

export default BoardsList;
