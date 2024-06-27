export type BoardStatusType = "OPEN" | "IN_PROGRESS" | "DONE";

export interface BoardsItem {
  id: number;
  title: string;
  description: string;
  attachment: string[];
  members: {
    id: string;
    firstName: string;
    lastName: string;
    email:string;
    avatar: string;
  }[];
}
