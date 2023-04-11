import React, { useRef, useState } from "react";
import {
  Card,
  Box,
  Button,
  Alert,
  TextField,
  Typography,
  Tooltip,
  InputAdornment,
} from "@mui/material";
import { useTheme } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { ClickAwayListener } from "@mui/base";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from "../../features/tasks";
import { actionColors } from "../../contexts/styles";

export default function Task({ task }) {
  const { id, title, value, created_at } = task;

  const [editTitle, setEditTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [editValue, setEditValue] = useState(false);
  const [newValue, setNewValue] = useState(value.toFixed(2));
  const [toDelete, setToDelete] = useState(false);

  const [triggerUpdateTaskMutation] = useUpdateTaskMutation();
  const [triggerDeleteTaskMutation, isLoading] = useDeleteTaskMutation();

  const handleTrackTaskClick = () => {
    //TODO:
  };

  const handleTitleClick = () => {
    setEditTitle(true);
  };

  const handleValueClick = () => {
    setEditValue(true);
  };

  const handleUpdateTitle = (e) => {
    setNewTitle(e.target.value);
  };

  const handleUpdateValue = (e) => {
    setNewValue(parseFloat(e.target.value).toFixed(2));
  };

  const handleSubmitUpdates = () => {
    setEditTitle(false);
    setEditValue(false);
    const updatedTask = {
      task_id: id,
      title: newTitle,
      value: newValue,
      created_at: created_at,
    };
    if (newTitle !== title || newValue !== value) {
      triggerUpdateTaskMutation(updatedTask)
        .unwrap()
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleSubmitUpdates();
    }
  };

  const handleDeleteTask = () => {
    setToDelete(true);
    triggerDeleteTaskMutation(task);
  };

  return (
    !toDelete && (
      <Card sx={{ display: "flex", alignItems: "center", p: 2, pl: 3, mb: 1 }}>
        <Box sx={{ display: "flex", width: "60vw", pr: 2 }}>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {editTitle ? (
              <ClickAwayListener onClickAway={handleSubmitUpdates}>
                <TextField
                  variant="standard"
                  defaultValue={newTitle}
                  onChange={(e) => handleUpdateTitle(e)}
                  onKeyDown={handleEnter}
                  autoFocus
                ></TextField>
              </ClickAwayListener>
            ) : (
              <Typography onClick={handleTitleClick}>{newTitle}</Typography>
            )}
            {editValue ? (
              <ClickAwayListener onClickAway={handleSubmitUpdates}>
                <TextField
                  variant="standard"
                  defaultValue={newValue}
                  onChange={(e) => handleUpdateValue(e)}
                  onKeyDown={handleEnter}
                  autoFocus
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  sx={{
                    width: "100px",
                    "& input": {
                      textAlign: "right",
                    },
                  }}
                ></TextField>
              </ClickAwayListener>
            ) : (
              <Typography onClick={handleValueClick}>${newValue}</Typography>
            )}
          </Box>
        </Box>
        <Box>
          <Tooltip title="Track Task">
            <Button
              onClick={handleTrackTaskClick}
              sx={{
                backgroundColor: `${actionColors.success.light}`,
                borderRadius: "4px",
                minWidth: "40px",
                width: "40px",
                mr: 1,
                "&:hover": {
                  backgroundColor: `${actionColors.success.medium}`,
                },
              }}
            >
              <CheckIcon color="success" />
            </Button>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="Delete Task">
            <Button
              onClick={handleDeleteTask}
              sx={{
                backgroundColor: `${actionColors.error.light}`,
                borderRadius: "4px",
                minWidth: "40px",
                width: "40px",
                mr: 1,
                "&:hover": {
                  backgroundColor: `${actionColors.error.medium}`,
                },
              }}
            >
              <DeleteOutlineIcon color="error" />
            </Button>
          </Tooltip>
        </Box>
      </Card>
    )
  );
}
