import React from "react";
import { Box, Typography, Card, useTheme } from "@mui/material";
import { useGetHistoryQuery } from "../../features/history";
import { actionColors } from "../../contexts/styles";
import History from "./History";

export default function HistoryList() {
  const {
    data: history,
    isLoading,
    isFetching,
    isError,
  } = useGetHistoryQuery();

  return (
    <Card
      sx={{
        width: "300px",
        mb: 1,
        overflow: "auto",
        maxHeight: "50vh",
        display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      {!isLoading &&
        history.map((value) => {
          return <History history={value} />;
        })}
    </Card>
  );
}
