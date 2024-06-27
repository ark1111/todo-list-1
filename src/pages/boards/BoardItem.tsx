import { useState } from "react";
import { BoardsItem } from "./types";
import PaperClipIcon from "../../assets/icons/PaperClipIcon";

type Props = {
  info: BoardsItem;
};

const BoardItem = ({ info }: Props) => {
  const [membersShowLimit, setMembersShowLimit] = useState(3);
  return (
    <div className="w-full rounded-xl border-2 border-divider p-4 mb-8">
      <div className="text-xl font-bold text-text-main">{info.title}</div>
      <div className="text-sm text-text-main mt-1">{info.description}</div>
      <div className="w-full flex items-center justify-between mt-5">
        <div className="flex items-center gap-x-1">
          {info.members.map((item, index) => (
            <>
              {index < membersShowLimit && (
                <div className="w-7 h-7 cursor-pointer p-0.5 rounded-full border-[1.5px] border-divider">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={item.avatar}
                      alt="member-avatar"
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
              )}
            </>
          ))}
          {info.members.length > membersShowLimit && (
            <div className="w-7 h-7 cursor-pointer p-0.5 rounded-full border-[1.5px] border-divider">
              <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden text-xs text-text-main bg-secondary-two">
                +{info.members.length - membersShowLimit}
              </div>
            </div>
          )}
        </div>
        {info.attachment.length > 0 && (
          <div className="w-14 h-7 flex items-center justify-center gap-x-0.5 rounded border-[1.5px] border-divider bg-secondary-one text-sx text-text-main">
            <PaperClipIcon width="20" />
            {info.attachment.length > 9 ? "+9" : info.attachment.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardItem;
