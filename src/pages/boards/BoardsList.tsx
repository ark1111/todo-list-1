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
        avatar: "/images/avatars/avatar-2.jpg",
        email: "test",
        firstName: "test",
        lastName: "test",
        id: "1",
      },
      {
        avatar: "/images/avatars/avatar-3.jpg",
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
    attachment: [
      {
        id: "1",
        type: "IMAGE",
        src: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    members: [
      {
        avatar: "/images/avatars/avatar-4.png",
        email: "test",
        firstName: "test",
        lastName: "test",
        id: "1",
      },
      {
        avatar: "./images/avatars/avatar-3.jpg",
        email: "test",
        firstName: "test",
        lastName: "test",
        id: "2",
      },
      {
        avatar: "./images/avatars/avatar-2.jpg",
        email: "test",
        firstName: "test",
        lastName: "test",
        id: "3",
      },
      {
        avatar: "./images/avatars/avatar-2.jpg",
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
