import express from "express";
import tasksRouter from "./routes/tasks";

const app = express();

app.use("/api/tasks", tasksRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
