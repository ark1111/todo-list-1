import { TaskType } from "../types/response";

export const TaskMockList: TaskType[] = [
  {
    id: "1",
    title: "Test-1",
    priority_type: "Low",
    end_date: "8-15-2024",
    attatchments: [],
    comments: [],
    status: "TODO",
  },
  {
    id: "2",
    title: "Test-2",
    priority_type: "High",
    end_date: "10-15-2024",
    attatchments: [],
    comments: [],
    status: "TODO",
  },
  {
    id: "3",
    title: "Test-3",
    priority_type: "High",
    end_date: "10-20-2024",
    attatchments: [],
    comments: [],
    status: "IN_PROGRESS",
  },
];
