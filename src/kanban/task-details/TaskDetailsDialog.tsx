import { Dialog } from '@design-system/Dialog';
import { useSelectedTask } from '../hooks/useSelectedTask';
import { TaskDetails } from './components/TaskDetails';

export const TaskDetailsDialog = () => {
  const { selectedTask, setSelectedTask } = useSelectedTask();
  if (!selectedTask) return null;

  const resetSelectedTask = () => setSelectedTask(null);

  return (
    <Dialog title={selectedTask.id} onClose={resetSelectedTask}>
      <TaskDetails task={selectedTask} />
    </Dialog>
  );
};
