import React from "react";
import { Card } from "@mui/material";
import { useGetHistoryQuery } from "../../features/history";
import History from "./History";

export default function HistoryList() {
  const { data: history, isLoading } = useGetHistoryQuery();

  return (
    <Card
      sx={{
        width: "100%",
        mb: 1,
        overflow: "auto",
        maxHeight: { xs: "auto", sm: "200px", md: "50vh" },
      }}
    >
      {!isLoading &&
        history.map((value) => {
          return <History history={value} key={value.id} />;
        })}
    </Card>
  );
}
