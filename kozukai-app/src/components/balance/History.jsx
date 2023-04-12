import React from "react";
import { Box, Typography, Card, useTheme } from "@mui/material";
import { useGetHistoryQuery } from "../../features/history";
import { actionColors } from "../../contexts/styles";

export default function History({ history }) {
  const theme = useTheme();
  const { created_at, task } = history;
  const { title, value } = task;

  function getMonthShortName(monthNo) {
    const date = new Date();
    date.setMonth(monthNo);

    return date.toLocaleString([], { month: "short" });
  }

  const getMonth = (unixSeconds) => {
    const date = new Date(unixSeconds);
    return getMonthShortName(date.getMonth());
  };

  const getDay = (unixSeconds) => {
    const date = new Date(unixSeconds);
    return date.getDate();
  };

  const getTime = (unixSeconds) => {
    const date = new Date(unixSeconds);
    return date.toLocaleTimeString();
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        p: 2,
        borderBottom: `1px solid ${theme.palette.primary.dark}`,
      }}
    >
      <Box sx={{ textAlign: "center", pr: 2 }}>
        <Typography sx={{ lineHeight: 1, fontSize: "0.8rem" }}>
          {getMonth(created_at)}
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", lineHeight: 1 }}>
          {getDay(created_at)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <Box>
          <Typography variant="subtitle1" sx={{ lineHeight: 1 }}>
            {title}
          </Typography>
          <Typography sx={{ lineHeight: 1 }} variant="overline">
            {getTime(created_at)}
          </Typography>
        </Box>
        <Typography sx={{ color: actionColors.success.medium }}>
          ${value.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
}
