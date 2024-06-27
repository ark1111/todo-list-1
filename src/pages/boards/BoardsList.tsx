import BoardItem from "./BoardItem";
import { BoardsItem } from "./types";

const list: BoardsItem[] = [
  {
    id: 1,
    title: "Login page",
    description: "Design login page",
    attachment: [],
    members: [
      {
        avatar: "",
        email: "test",
        firstName: "test",
        lastName: "test",
        id: "1",
      },
      {
        avatar: "",
        email: "test",
        firstName: "test",
        lastName: "test",
        id: "2",
      },
    ],
  },
  {
    id: 2,
    title: "Register page",
    description: "Design register page",
    attachment: [],
    members: [
      {
        avatar: "",
        email: "test",
        firstName: "test",
        lastName: "test",
        id: "1",
      },
      {
        avatar: "",
        email: "test",
        firstName: "test",
        lastName: "test",
        id: "2",
      },
      {
        avatar: "",
        email: "test",
        firstName: "test",
        lastName: "test",
        id: "3",
      },
      {
        avatar: "",
        email: "test",
        firstName: "test",
        lastName: "test",
        id: "4",
      },
    ],
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
