import { Request, Response } from "express-serve-static-core";
import { CreateTaskDto } from "../dtos/task/CreateTask.dto";
import { CreateTaskQueryParamsType } from "../types/query-params";
import { TaskType } from "../types/response";
import { TaskMockList } from "../mock/task";

export function getTasks(request: Request, response: Response<TaskType[]>) {
  response.send(TaskMockList);
}

export function createTask(
  request: Request<{}, {}, CreateTaskDto, CreateTaskQueryParamsType>,
  response: Response<TaskType>
) {
  console.log(request?.body?.title);
  response.send({
    id: "1",
    title: "Test-1",
    priority_type: "Low",
    end_date: "8-15-2024",
    attatchments: [],
    comments: [],
    status: "TODO",
  });
}
