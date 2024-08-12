import ListItem from "./ListItem";

type Props = {
  title: string;
  length: number;
};

const List = ({ title, length }: Props) => {
  return (
    <div className="w-full p-4 rounded-xl bg-surface-one">
      <div className="flex items-center gap-x-1">
        <div className="text-base font-medium text-text-800">{title}</div>
        <div className="text-base font-medium text-text-800 px-1 rounded bg-surface-two">
          {length}
        </div>
      </div>
      <div className="w-full mt-5 flex flex-col gap-y-5">
        <ListItem priorityType="Low" />
        <ListItem priorityType="High" />
        <ListItem priorityType="Medium" />
      </div>
    </div>
  );
};

export default List;
