import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { useGetHistoryQuery } from "../../features/history";
import History from "./History";
import { useTheme } from "@mui/material";

export default function HistoryList() {
  const theme = useTheme();

  const { data: history } = useGetHistoryQuery();

  console.log(history);
  return (
    <Card
      sx={{
        width: "100%",
        mb: 1,
        overflow: "auto",
        maxHeight: { xs: "auto", sm: "200px", md: "none" },
      }}
    >
      {history &&
        history.map((value) => {
          return <History history={value} key={value.id} />;
        })}
      {history && history.length === 0 && (
        <>
          <Box
            sx={{
              p: 2,
              borderBottom: `1px solid ${theme.palette.primary.dark}`,
            }}
          >
            <Typography>You have no history to display.</Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              borderBottom: `1px solid ${theme.palette.primary.dark}`,
            }}
          >
            <Typography>Completed tasks will be displayed here.</Typography>
          </Box>
        </>
      )}
    </Card>
  );
}
