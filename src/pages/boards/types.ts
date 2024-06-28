export type BoardStatusType = "OPEN" | "IN_PROGRESS" | "DONE";

export type AttachmentType = "IMAGE" | "VIDEO" | "AUDIO";

export interface BoardsItem {
  id: number;
  title: string;
  description: string;
  attachment: {
    id: string;
    type: AttachmentType;
    src: string;
  }[];
  members: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
  }[];
}
