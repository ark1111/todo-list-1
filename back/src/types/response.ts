export type PriorityType = "Low" | "Medium" | "High";

export type TaskStatusType = "TODO" | "IN_PROGRESS" | "TEST" | "DONE";

export interface TaskType {
  id: string;
  title: string;
  priority_type: PriorityType;
  end_date: string;
  attatchments: string[];
  comments: string[];
  status: TaskStatusType;
}
