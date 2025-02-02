import { Column } from './Column';
import type { Column as TColumn } from '../types';

const KANBAN_COLUMNS: TColumn['id'][] = [
  'todo',
  'in-progress',
  'review',
  'done',
];

export const Board = () => {
  return (
    <div className="bg-gray-default/70 flex h-full flex-1 items-start justify-items-start space-x-4 overflow-y-hidden rounded-xl p-4 xl:justify-center">
      {KANBAN_COLUMNS.map((columnId) => (
        <Column key={columnId} columnId={columnId} />
      ))}
    </div>
  );
};
