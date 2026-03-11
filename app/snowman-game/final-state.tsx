import { MouseEventHandler } from 'react';

export default function FinalState({
  message,
  onClick,
}: {
  message: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="flex flex-col grow items-center justify-center w-full">
      <div className="text-center">{message}</div>
      <button className={'bg-sky-500 hover:bg-sky-700 rounded-full px-4 text-white'} onClick={onClick}>
        Start Over!
      </button>
    </div>
  );
}
