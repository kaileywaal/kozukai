import React from "react";
import { Box } from "@mui/material";
import Task from "./Task";
import { useGetTasksQuery } from "../../features/tasks";

export default function TaskList() {
  const { data: tasks, isLoading } = useGetTasksQuery();

  return (
    <Box>
      {!isLoading &&
        tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
    </Box>
  );
}
