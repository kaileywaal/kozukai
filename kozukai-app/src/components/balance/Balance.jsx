import React, { useMemo } from "react";
import { Box, Typography, Card, useTheme } from "@mui/material";
import { useGetHistoryQuery } from "../../features/history";

export default function Balance() {
  const {
    data: history,
    isLoading,
    isFetching,
    isError,
  } = useGetHistoryQuery();
  const theme = useTheme();

  const total = useMemo(() => {
    if (!isLoading && !isFetching && !isError) {
      return history.reduce((acc, obj) => {
        return (acc += obj.task.value);
      }, 0);
    }
    return 0;
  }, [history, isError, isFetching, isLoading]);

  return (
    <Card
      sx={{
        width: "100%",
        height: "200px",
        mb: 2,
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "flex-end",
        background: `linear-gradient(110deg, ${theme.palette.custom.dark}, ${theme.palette.custom.medium}, ${theme.palette.secondary.main}, ${theme.palette.custom.light})`,
      }}
    >
      <Box
        sx={{
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
