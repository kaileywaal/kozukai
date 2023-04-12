import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { actionColors } from "../../../contexts/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function AlertError({ errorMessage }) {
  return (
    <Card
      sx={{
        mb: 2,
        backgroundColor: actionColors.error.light,
      }}
    >
      <Box sx={{ display: "flex", p: 2 }}>
        <ErrorOutlineIcon sx={{ color: actionColors.error.dark, mr: 1 }} />
        <Typography sx={{ color: actionColors.error.dark }}>
          {errorMessage}
        </Typography>
      </Box>
    </Card>
  );
}
