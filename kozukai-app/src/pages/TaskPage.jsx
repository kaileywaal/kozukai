import TaskList from "../components/tasks/TaskList";
import TaskBar from "../components/tasks/TaskBar";
import { Container, Box } from "@mui/material";
import Balance from "../components/balance/Balance";
import HistoryList from "../components/balance/HistoryList";

function TaskPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 4,
        flexWrap: "wrap",
        mt: 8,
      }}
    >
      <Box>
        <Balance />
        <HistoryList />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <TaskBar />
        <TaskList />
      </Box>
    </Container>
  );
}

export default TaskPage;
