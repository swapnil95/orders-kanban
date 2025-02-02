import { PropsWithChildren } from 'react';

export const AppWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="3xl:px-96 flex h-screen w-full flex-col rounded-xl px-24 pb-4 xl:px-32">
      {children}
    </div>
  );
};
