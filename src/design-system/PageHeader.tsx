import { Typography } from './Typography';

type PageHeaderProps = {
  heading: string;
};

export const PageHeader = ({ heading }: PageHeaderProps) => {
  return (
    <div className="flex pt-8 pb-4">
      <Typography variant="h1" className="text-gray-default">
        {heading}
      </Typography>
    </div>
  );
};
