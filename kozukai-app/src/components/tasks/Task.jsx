import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Tooltip,
  InputAdornment,
  useTheme,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { ClickAwayListener } from "@mui/base";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from "../../features/tasks";
import { useAddHistoryMutation } from "../../features/history";
import { actionColors } from "../../contexts/styles";

export default function Task({ task }) {
  const { id, title, value, created_at } = task;

  const theme = useTheme();
  const [editTitle, setEditTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [editValue, setEditValue] = useState(false);
  const [newValue, setNewValue] = useState(value.toFixed(2));
  const [toDelete, setToDelete] = useState(false);

  const [triggerUpdateTaskMutation] = useUpdateTaskMutation();
  const [triggerDeleteTaskMutation] = useDeleteTaskMutation();
  const [triggerAddHistoryMutation] = useAddHistoryMutation();

  const handleTrackTaskClick = () => {
    triggerAddHistoryMutation(id)
      .unwrap()
      .catch((err) => {
        console.error(err);
      });
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
        .catch((error) => {
          console.log(error);
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1.5,
          px: 3,
          borderBottom: `1px solid ${theme.palette.primary.dark}`,
        }}
      >
        <Box sx={{ display: "flex", width: "100%", pr: 2 }}>
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
                  fullWidth
                  sx={{ pr: 2 }}
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
                    width: "80px",
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
                borderRadius: "8px",
                minWidth: "40px",
                width: "40px",
                mr: 1,
                "&:hover": {
                  backgroundColor: `${actionColors.success.medium}`,
                },
              }}
            >
              <CheckIcon sx={{ color: actionColors.success.main }} />
            </Button>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="Delete Task">
            <Button
              onClick={handleDeleteTask}
              sx={{
                backgroundColor: `${actionColors.error.light}`,
                borderRadius: "8px",
                minWidth: "40px",
                width: "40px",
                mr: 1,
                "&:hover": {
                  backgroundColor: `${actionColors.error.medium}`,
                },
              }}
            >
              <DeleteOutlineIcon sx={{ color: actionColors.error.main }} />
            </Button>
          </Tooltip>
        </Box>
      </Box>
    )
  );
}
