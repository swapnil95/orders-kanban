import { Board } from './board/Board';
import { TaskDetailsDialog } from './task-details/TaskDetailsDialog';
import { Filters } from './filters';

export const KanbanBoard = () => {
  return (
    <>
      <Filters />
      <Board />
      <TaskDetailsDialog />
    </>
  );
};
