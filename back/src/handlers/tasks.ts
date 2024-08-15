import { Request, Response } from "express";
import { CreateTaskDto } from "../dtos/task/CreateTask.dto";

export function getTasks(request: Request, response: Response) {
  response.send([]);
}

export function createTask(
  request: Request<{}, {}, CreateTaskDto>,
  response: Response
) {
  console.log(request?.body?.title);
  response.send({});
}
