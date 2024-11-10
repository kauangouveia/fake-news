
import Image from 'next/image'
import arrow from '@/assets/arrow.svg'
import ArrowIcon from './Arrow';


interface ButtonSecondaryProps {
  title: string;
}

export const ButtonSecondary = ({ title }: ButtonSecondaryProps) => {
  return (
    <button className="h-16 w-40 bg-white rounded flex gap-2 items-center justify-center font-bold shadow-2xl hover:opacity-95">
      {title}
      <ArrowIcon
        _className='shrink-0 fill-background'
        width={14} height={14}
      />
    </button>
  )
}