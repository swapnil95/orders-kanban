import { PropsWithChildren } from 'react';
import { Typography } from '@design-system/Typography';

type TaskDetailSectionProps = PropsWithChildren<{
  title: string;
}>;

export const TaskDetailSection = ({
  title,
  children,
}: TaskDetailSectionProps) => {
  return (
    <div className="flex flex-col">
      <Typography variant="h4" className="mb-4">
        {title}
      </Typography>
      {children}
    </div>
  );
};
