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

export default function Task() {
  const theme = useTheme();

  const handleClick = () => {
    //TODO:
  };

  return (
    <Card sx={{ display: "flex", alignItems: "center", p: 2, pl: 3, mb: 2 }}>
      <Box sx={{ display: "flex", width: "600px", pr: 2 }}>
        <Box
          sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}
        >
          <Typography>Task name</Typography>
          <Typography>$3</Typography>
        </Box>
      </Box>
      <Box>
        <Tooltip title="Track Task">
          <Button
            onClick={handleClick}
            sx={{
              backgroundColor: "#EDF7ED",
              borderRadius: "4px",
              minWidth: "40px",
              width: "40px",
              mr: 1,
            }}
          >
            <CheckIcon color="success" />
          </Button>
        </Tooltip>
      </Box>
    </Card>
  );
}
