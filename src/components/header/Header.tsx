import BellIcon from "../../assets/icons/BellIcon";
import ListIcon from "../../assets/icons/ListIcon";

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-center border-b-2 border-divider relative">
      <div className="text-text-main absolute left-5 cursor-pointer">
        <ListIcon />
      </div>
      <div className="text-xl font-bold text-text-main">Boards</div>
      <div className="flex items-center gap-x-3 absolute right-5">
        <div className="w-5 h-5 flex items-center justify-center relative text-text-main cursor-pointer">
          <BellIcon />
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 absolute translate-x-1 -translate-y-1 border border-background box-content"></div>
        </div>
        <div className="w-8 h-8 rounded-full p-1 border-2 border-divider cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Header;
