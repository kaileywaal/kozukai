import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Checkbox from "../ui/Checkbox";
import {
  Card,
  CardContent,
  Box,
  Button,
  Alert,
  TextField,
  Typography,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Task from "./Task";
import { useGetTasksQuery } from "../../features/tasks";

export default function TaskList() {
  const theme = useTheme();

  const { data, isLoading } = useGetTasksQuery();

  return (
    <Box>
      {!isLoading &&
        data.map((task) => {
          return <Task title={task.title} value={task.value} />;
        })}
    </Box>
  );
}
