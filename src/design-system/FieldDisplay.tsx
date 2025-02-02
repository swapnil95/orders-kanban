import { ReactElement } from 'react';
import { Typography } from '@design-system/Typography';

type Props = {
  label: string;
  value: string | ReactElement;
  variant?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
};

const Field = ({ label, value }: Pick<Props, 'label' | 'value'>) => {
  const isString = typeof value === 'string';
  return (
    <>
      <Typography variant="small">{label}:</Typography>
      {isString ? (
        <Typography variant="default" className="truncate">
          {value}
        </Typography>
      ) : (
        value
      )}
    </>
  );
};

/** In the future this can become an editable field for in-line editing like JIRA */
export const FieldDisplay = ({
  label,
  value,
  variant = 'horizontal',
  fullWidth = true,
}: Props) => {
  const spacingClass = fullWidth ? 'justify-between' : '';
  return variant === 'horizontal' ? (
    <div className={`my-2 flex w-full items-center space-x-2 ${spacingClass}`}>
      <Field label={label} value={value} />
    </div>
  ) : (
    <div className="my-2 flex flex-col">
      <Field label={label} value={value} />
    </div>
  );
};
