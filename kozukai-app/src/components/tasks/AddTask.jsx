import React, { useState } from "react";
import { Card, Button, TextField } from "@mui/material";
import { useAddTaskMutation } from "../../features/tasks";

export default function AddTask() {
  const [triggerAddTask, resultAddTask] = useAddTaskMutation();
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleAddTask = () => {
    const task = { title, value };
    triggerAddTask(task);
    clearInput();
  };

  const clearInput = () => {
    setTitle("");
    setValue("");
  };

  return (
    <Card sx={{ display: "flex", alignItems: "center", p: 2, pl: 3, mb: 1 }}>
      <TextField
        id="title"
        label="Task name"
        type="text"
        required
        value={title}
        onChange={handleTitleChange}
        sx={{ width: "100%", marginBottom: "10px" }}
      />
      <TextField
        id="value"
        label="Task value"
        type="number"
        required
        value={value}
        onChange={handleValueChange}
        sx={{ width: "100%", marginBottom: "10px" }}
      />
      <Button
        variant="contained"
        type="submit"
        onClick={handleAddTask}
        sx={{ width: "100%", maxWidth: "175px", mt: 2 }}
      >
        Add task
      </Button>
    </Card>
  );
}
