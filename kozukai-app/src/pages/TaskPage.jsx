import TaskList from "../components/tasks/TaskList";
import TaskBar from "../components/tasks/TaskBar";
import { Container, Box, Grid } from "@mui/material";
import Balance from "../components/balance/Balance";
import HistoryList from "../components/balance/HistoryList";

function TaskPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        flexWrap: "wrap",
        mt: 8,
      }}
    >
      <Grid container spacing={2} sx={{ width: { md: "300px" } }}>
        <Grid item xs={4} sm={4} md={12} lg={12} xl={12}>
          <Balance />
        </Grid>
        <Grid item xs={8} sm={8} md={12} lg={12} xl={12}>
          <HistoryList />
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
        <TaskBar />
        <TaskList />
      </Box>
    </Container>
  );
}

export default TaskPage;
