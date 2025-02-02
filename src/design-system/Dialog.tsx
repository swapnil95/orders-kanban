import { PropsWithChildren } from 'react';
import { Typography } from './Typography';

type DialogProps = PropsWithChildren<{
  title: string;
  onClose: () => void;
}>;

export const Dialog = ({ children, title, onClose }: DialogProps) => {
  return (
    <div className="bg-opacity-50 fixed inset-0 flex items-start justify-center bg-black/50 pt-38">
      <div className="w-6xl rounded-lg rounded-t-xl shadow-lg">
        <div className="bg-gray-default flex items-center justify-between rounded-t-xl pr-4 pb-2 pl-12">
          <Typography
            variant="default-bold"
            className="rounded-t-xl py-2 text-3xl text-white"
          >
            {title}
          </Typography>
          <button className="text-white" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="rounded-b-xl bg-white p-6 px-12">{children}</div>
      </div>
    </div>
  );
};
