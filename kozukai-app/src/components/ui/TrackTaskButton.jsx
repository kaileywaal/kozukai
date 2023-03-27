import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Box,
  Button,
  Alert,
  TextField,
  Typography,
} from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { useTheme } from "@mui/material";

export default function TrackTaskButton() {
  const [isChecked, setIsChecked] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Button onClick={handleClick} sx={{ backgroundColor: "#EDF7ED" }}>
      <AssignmentTurnedInIcon sx={{ color: theme.palette.success.main }} />
    </Button>
  );
}
