import { AttachmentType } from "./types";

type Props = {
  type: AttachmentType;
  src: string;
};

const AttachmentPreview = ({ type, src }: Props) => {
  return (
    <div className="w-full mt-5">
      {type === "IMAGE" && <ImageFile src={src} />}
    </div>
  );
};

export default AttachmentPreview;

const ImageFile = ({ src }: { src: string }) => {
  return <img src={src} alt="image" className="w-full rounded" />;
};
