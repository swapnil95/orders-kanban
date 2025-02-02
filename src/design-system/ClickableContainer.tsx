import { PropsWithChildren, SyntheticEvent } from 'react';

type ClickableContainerProps = PropsWithChildren<{
  onClick: (event: SyntheticEvent<HTMLButtonElement>) => void;
}>;

export const ClickableContainer = ({
  children,
  onClick,
}: ClickableContainerProps) => {
  return (
    <button
      className="block w-full text-left hover:cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
