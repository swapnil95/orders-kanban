import { Typography } from '@design-system/Typography';

type ColumnHeaderProps = {
  title: string;
};

export const ColumnHeader = ({ title }: ColumnHeaderProps) => {
  return (
    <Typography
      variant="default-bold"
      className="bg-gray-default rounded-t-xl px-4 py-2 text-3xl text-white"
    >
      {title}
    </Typography>
  );
};
