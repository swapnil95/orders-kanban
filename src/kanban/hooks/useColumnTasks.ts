import { useMemo } from 'react';
import { useKanbanStore } from '../store';
import { useFilteredTasks } from './useFilteredTasks';

export const useColumnTasks = (columnId: string) => {
  const filteredTasks = useFilteredTasks();
  const columnTaskIds = useKanbanStore(
    (state) => state.columns[columnId].taskIds
  );
  const filteredColumnTasks = useMemo(
    () => filteredTasks.filter((task) => columnTaskIds.includes(task.id)),
    [filteredTasks]
  );
  return filteredColumnTasks;
};
