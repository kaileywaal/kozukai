import React, { useMemo } from "react";
import { Box, Typography, Card, useTheme } from "@mui/material";
import { useGetHistoryQuery } from "../../features/history";

export default function Balance() {
  const { data: history, isLoading } = useGetHistoryQuery();
  const theme = useTheme();

  const total = useMemo(() => {
    if (!isLoading) {
      return history.reduce((acc, obj) => {
        return (acc += obj.task.value);
      }, 0);
    }
  }, [history]);

  return (
    <Card
      sx={{
        width: "300px",
        height: "180px",
        background: `linear-gradient(110deg, ${theme.palette.custom.dark}, ${theme.palette.custom.medium}, ${theme.palette.secondary.main}, ${theme.palette.custom.light})`,
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "flex-end",
          p: 3,
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: theme.palette.primary.light, lineHeight: 1 }}
        >
          Balance
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: theme.palette.primary.light, fontWeight: "600" }}
        >
          ${total.toFixed(2)}
        </Typography>
      </Box>
    </Card>
  );
}
