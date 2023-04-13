import React from "react";
import { Card, Typography, useTheme } from "@mui/material";
import AddTask from "./AddTask";
import { useGetUserQuery } from "../../features/auth";

export default function TaskBar() {
  const theme = useTheme();
  const { data } = useGetUserQuery();

  return (
    data && (
      <Card
        sx={{
          backgroundColor: theme.palette.primary.dark,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
          px: 3,
          mb: 2,
        }}
      >
        <Typography
          sx={{ color: theme.palette.primary.light, fontWeight: "bold" }}
        >
          👋🏼 Welcome Back, {data.name}!
        </Typography>
        <AddTask />
      </Card>
    )
  );
}
