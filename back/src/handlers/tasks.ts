import { Request, Response } from "express";

export function getTasks(request: Request, response: Response) {
  response.send([]);
}
