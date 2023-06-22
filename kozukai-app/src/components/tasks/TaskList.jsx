import React from "react";
import { Card, Box, Typography } from "@mui/material";
import Task from "./Task";
import { useGetTasksQuery } from "../../features/tasks";
import { useTheme } from "@emotion/react";

export default function TaskList() {
  const theme = useTheme();
  const { data: tasks } = useGetTasksQuery();

  return (
    <Card>
      {tasks &&
        tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      {tasks && tasks.length === 0 && (
        <>
          <Box
            sx={{
              p: 2,
              borderBottom: `1px solid ${theme.palette.primary.dark}`,
            }}
          >
            <Typography>Add a task to get started!</Typography>
          </Box>
        </>
      )}
    </Card>
  );
}
