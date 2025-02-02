import React from 'react';

type TypographyProps = {
  variant: 'default' | 'default-bold' | 'default-light' | 'small' | 'h1' | 'h4';
  children: React.ReactNode;
  className?: string;
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => {
  const variantStyles = {
    default: 'text-base text-gray-default',
    small: 'text-sm text-gray-default',
    h1: 'text-3xl font-bold text-gray-default',
    h4: 'text-xl font-bold text-gray-default',
    'default-bold': 'text-base font-bold text-gray-900',
    'default-light': 'text-base text-gray-lighter',
  };

  const classes = `${variantStyles[variant]} ${className || ''}`.trim();

  switch (variant) {
    case 'h1':
      return <h1 className={classes}>{children}</h1>;
    case 'h4':
      return <h4 className={classes}>{children}</h4>;
    case 'default-bold':
      return <h4 className={classes}>{children}</h4>;
    case 'small':
      return <small className={classes}>{children}</small>;
    default:
      return <p className={classes}>{children}</p>;
  }
};
