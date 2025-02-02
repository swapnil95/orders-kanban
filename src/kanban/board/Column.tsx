import { useKanbanStore } from '../store';
import { TaskCard } from './components/TaskCard';
import { ColumnId } from '../types';
import { useColumnTasks } from '../hooks/useColumnTasks';
import { ColumnHeader } from './components/ColumnHeader';

type ColumnProps = {
  columnId: ColumnId;
};

export const Column = ({ columnId }: ColumnProps) => {
  const setSelectedTask = useKanbanStore((state) => state.setSelectedTask);

  const column = useKanbanStore((state) => state.columns[columnId]);
  const tasks = useColumnTasks(columnId);

  return (
    <div className="flex max-h-full w-64 flex-col rounded-xl bg-gray-200">
      <ColumnHeader title={column.title} />
      <div className="flex-1 space-y-2 overflow-y-auto p-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={() => setSelectedTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
};
