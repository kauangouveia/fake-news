import ArrowIcon from './Arrow';
import { ButtonHTMLAttributes } from 'react';

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const ButtonSecondary = ({ title, onClick }: ButtonSecondaryProps) => {
  return (
    <button className="h-16 w-40 bg-white rounded flex gap-2 items-center justify-center font-bold shadow-2xl hover:opacity-95" onClick={onClick}>
      {title}
      <ArrowIcon
        _className='shrink-0 fill-background'
        width={14} height={14}
      />
    </button>
  )
}