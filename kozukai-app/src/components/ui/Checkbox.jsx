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
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        width: "20px",
        height: "20px",
        minWidth: "20px",
        padding: 0,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 20,
        backgroundColor: isChecked ? theme.palette.primary.main : "none",
        mr: 2,
        "&:hover": {
          border: `2px solid ${theme.palette.primary.dark}`,
          backgroundColor: isChecked ? theme.palette.primary.dark : "none",
        },
      }}
    >
      {isChecked && (
        <CheckIcon
          sx={{
            color: theme.palette.primary.light,
            width: "16px",
            height: "16px",
          }}
        />
      )}
    </Button>
  );
}
