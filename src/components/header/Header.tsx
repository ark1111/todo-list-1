import BellIcon from "../../assets/icons/BellIcon";
import ListIcon from "../../assets/icons/ListIcon";
import defaultAvatar from "../../assets/avatars/avatar-1.png";

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-center border-b-2 border-divider relative">
      <div className="text-text-main absolute left-6 cursor-pointer">
        <ListIcon />
      </div>
      <div className="text-xl font-bold text-text-main">Boards</div>
      <div className="flex items-center gap-x-3 absolute right-6">
        <div className="w-7 h-7 flex items-center justify-center relative text-text-main cursor-pointer">
          <BellIcon width="28" />
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 absolute translate-x-2 -translate-y-2 border border-background box-content"></div>
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center p-0.5 border-2 border-divider cursor-pointer">
          <img src={defaultAvatar} alt="avatar" className="w-full h-full rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Header;
