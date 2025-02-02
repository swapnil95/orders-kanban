import { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren;

export const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-xl bg-white px-4 py-2 shadow hover:bg-gray-100">
      {children}
    </div>
  );
};
