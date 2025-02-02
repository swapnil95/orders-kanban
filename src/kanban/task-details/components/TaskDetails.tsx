import { FieldDisplay } from '@design-system/FieldDisplay';
import { Task } from '../../types';
import { OrderDetails } from './OrderDetails';
import { ProcessDetails } from './ProcessDetails';
import { PriorityLabel } from '@design-system/PriorityLabel';

type TaskDetailsProps = {
  task: Task;
};

export const TaskDetails = ({ task }: TaskDetailsProps) => {
  return (
    <div className="flex">
      <div className="w-2/3">
        <OrderDetails orderDetails={task.orderDetails} />
        <FieldDisplay
          label="Priority"
          fullWidth={false}
          value={<PriorityLabel level={task.priority} />}
        />
      </div>
      <div className="w-1/3">
        <ProcessDetails processDetails={task.processDetails} />
      </div>
    </div>
  );
};
