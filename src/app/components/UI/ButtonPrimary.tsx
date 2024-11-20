
import { ButtonHTMLAttributes } from 'react';
import ArrowIcon from './Arrow';

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const ButtonPrimary = ({ title, onClick }: ButtonPrimaryProps) => {
  return (
    <button className="h-16 w-40 bg-primaryDefault rounded flex gap-2 items-center justify-center font-bold text-white shadow-2xl hover:opacity-95" onClick={onClick}>
      {title}
      <ArrowIcon
        _className='shrink-0 fill-white'
        width={14} height={14}
      />
    </button>
  )
}