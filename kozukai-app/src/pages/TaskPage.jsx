import TaskList from "../components/tasks/TaskList";
import TaskBar from "../components/tasks/TaskBar";
import { Container, Box, Grid, Typography } from "@mui/material";
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
        mt: 4,
      }}
    >
      <Grid container spacing={2} sx={{ width: { md: "300px" } }}>
        <Grid item xs={12} sm={4} md={12} lg={12} xl={12}>
          <Balance />
        </Grid>
        <Grid
          item
          sm={8}
          md={12}
          lg={12}
          xl={12}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <HistoryList />
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
        <TaskBar />
        <TaskList />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Typography variant="h6">History</Typography>
        <HistoryList />
      </Box>
    </Container>
  );
}

export default TaskPage;
