import React, { useState } from "react";
import {
  Card,
  Button,
  TextField,
  Modal,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material";
import { useAddTaskMutation } from "../../features/tasks";
import { useTheme } from "@mui/material";
import { actionColors } from "../../contexts/styles";
import AddIcon from "@mui/icons-material/Add";

export default function AddTask() {
  const theme = useTheme();

  const [triggerAddTask, resultAddTask] = useAddTaskMutation();
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
    handleModalClose();
  };

  const clearInput = () => {
    setTitle("");
    setValue("");
  };

  const handleModalClose = () => {
    setModalOpen(false);
    clearInput();
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const isSubmitDisabled = () => {
    return value === "" || title.trim() === "";
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button variant="contained" onClick={handleModalOpen}>
          <AddIcon sx={{ pr: 1 }} />
          Add Item
        </Button>
      </Box>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ maxWidth: "600px", padding: 6 }}>
          <Typography variant="h3" sx={{ pb: 2 }}>
            New Task
          </Typography>
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            sx={{ width: "100%", marginBottom: "10px" }}
          />
          <Button
            variant="outlined"
            onClick={handleModalClose}
            sx={{
              width: "100%",
              maxWidth: "175px",
              mt: 2,
              mr: 1,
              border: `2px solid ${actionColors.error.main}`,
              color: actionColors.error.main,
              backgroundColor: theme.palette.secondary.light,
              "&:hover": {
                border: `2px solid ${actionColors.error.dark}`,
                color: actionColors.error.dark,
                backgroundColor: theme.palette.secondary.light,
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleAddTask}
            disabled={isSubmitDisabled()}
            sx={{
              width: "100%",
              maxWidth: "175px",
              mt: 2,
              color: actionColors.information.light,
              backgroundColor: actionColors.information.main,
              "&:hover": {
                backgroundColor: actionColors.information.dark,
              },
            }}
          >
            Add task
          </Button>
        </Card>
      </Modal>
    </>
  );
}
