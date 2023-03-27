import TaskList from "../components/tasks/TaskList";
import AddTask from "../components/tasks/AddTask";
import { Box } from "@mui/system";

function TaskPage() {
  return (
    <Box>
      <AddTask />
      <TaskList />
    </Box>
  );
}

export default TaskPage;
