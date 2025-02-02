import { capitalCase } from 'change-case';
import { FieldDisplay } from '@design-system/FieldDisplay';

import { Task } from '../../types';
import { TaskDetailSection } from './TaskDetailSection';

type ProcessDetailsProps = {
  processDetails: Task['processDetails'];
};

export const ProcessDetails = ({ processDetails }: ProcessDetailsProps) => {
  return (
    <TaskDetailSection title="Process Details">
      {Object.entries(processDetails).map(([key, value]) => (
        <div key={key} className="flex">
          <FieldDisplay label={capitalCase(key)} value={value} />
        </div>
      ))}
    </TaskDetailSection>
  );
};
