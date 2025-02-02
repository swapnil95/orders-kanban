import React from 'react';
import { Task } from '../kanban/types';
import { Typography } from './Typography';

interface PriorityProps {
  level: Task['priority'];
}

const priorityStyles: Record<Task['priority'], string> = {
  critical: 'text-red-700 bg-red-100',
  high: 'text-yellow-700 bg-yellow-100',
  standard: 'text-green-700 bg-green-100',
};

const priorityDisplayText = {
  critical: 'Critical Path',
  high: 'High Priority',
  standard: 'Standard',
};

export const PriorityLabel: React.FC<PriorityProps> = ({ level }) => {
  return (
    <Typography
      variant="small"
      className={`truncate rounded-full px-3 py-1 text-sm font-semibold ${priorityStyles[level]}`}
    >
      {priorityDisplayText[level]}
    </Typography>
  );
};
