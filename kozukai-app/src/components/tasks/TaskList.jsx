import React from "react";
import { Card } from "@mui/material";
import Task from "./Task";
import { useGetTasksQuery } from "../../features/tasks";

export default function TaskList() {
  const { data: tasks } = useGetTasksQuery();

  return (
    <Card>
      {tasks &&
        tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
    </Card>
  );
}
