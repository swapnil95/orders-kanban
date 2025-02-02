import { SyntheticEvent } from 'react';
import { Card } from '@design-system/Card';
import { Divider } from '@design-system/Divider';
import { Typography } from '@design-system/Typography';
import { ClickableContainer } from '@design-system/ClickableContainer';
import { PriorityLabel } from '@design-system/PriorityLabel';
import { FieldDisplay } from '@design-system/FieldDisplay';

import { Task } from '../../types';

type Props = {
  task: Task;
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
};

export const TaskCard = ({ task, onClick }: Props) => {
  return (
    <ClickableContainer onClick={onClick}>
      <Card>
        <Typography variant="h4">{task.id}</Typography>
        <Typography variant="default-light" className="truncate">
          {task.description}
        </Typography>
        <Divider />
        <FieldDisplay
          label="Priority"
          value={<PriorityLabel level={task.priority} />}
        />
        <FieldDisplay label="Due Date" value={task.dueDate} />
      </Card>
    </ClickableContainer>
  );
};
