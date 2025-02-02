import { capitalCase } from 'change-case';
import { FieldDisplay } from '@design-system/FieldDisplay';

import { Task } from '../../types';
import { TaskDetailSection } from './TaskDetailSection';

type OrderDetailsProps = {
  orderDetails: Task['orderDetails'];
};

export const OrderDetails = ({ orderDetails }: OrderDetailsProps) => {
  return (
    <TaskDetailSection title="Order Details">
      <div className="flex w-full flex-wrap">
        {Object.entries(orderDetails).map(([key, value]) => (
          <div key={key} className="w-1/3">
            <FieldDisplay
              label={capitalCase(key)}
              value={value}
              variant="vertical"
            />
          </div>
        ))}
      </div>
    </TaskDetailSection>
  );
};
