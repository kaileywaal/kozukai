import TaskList from "../components/tasks/TaskList";
import AddTask from "../components/tasks/AddTask";
import { Container, Box } from "@mui/material";
import Balance from "../components/balance/Balance";

function TaskPage() {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "row", gap: 4, flexWrap: "wrap" }}
    >
      <Balance />
      <Box sx={{ flexGrow: 1 }}>
        <AddTask />
        <TaskList />
      </Box>
    </Container>
  );
}

export default TaskPage;
