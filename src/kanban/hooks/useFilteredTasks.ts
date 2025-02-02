import { useMemo } from 'react';
import { useKanbanStore } from '../store';
import { Task } from '../types';

export const useFilteredTasks = () => {
  const allTasks = useKanbanStore((state) => state.tasks);
  const filters = useKanbanStore((state) => state.filters);
  const filteredTasks: Task[] = useMemo(() => {
    return Object.entries(allTasks)
      .filter(
        ([taskId, task]) =>
          taskId.startsWith(filters.search) ||
          task.description.toLocaleLowerCase().includes(filters.search)
      )
      .map(([_, task]) => task);
  }, [allTasks, filters.search]);
  return filteredTasks;
};
