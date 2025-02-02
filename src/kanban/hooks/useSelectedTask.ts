import { useShallow } from 'zustand/react/shallow';
import { useKanbanStore } from '../store';

export const useSelectedTask = () => {
  const { selectedTask, setSelectedTask } = useKanbanStore(
    useShallow(({ selectedTaskId, setSelectedTask, tasks }) => ({
      selectedTask: selectedTaskId ? tasks[selectedTaskId] : null,
      setSelectedTask,
    }))
  );
  return { selectedTask, setSelectedTask };
};
