// type Props = {}

import PlusIcon from "../../assets/icons/PlusIcon";

const NewTask = () => {
  return (
    <div className="w-full h-20 fixed md:absolute bottom-0 left-0 z-20 shadow-3xl flex items-center justify-center">
      <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-divider bg-primary text-text-onPrimary cursor-pointer">
        <PlusIcon />
      </div>
    </div>
  );
};

export default NewTask;
