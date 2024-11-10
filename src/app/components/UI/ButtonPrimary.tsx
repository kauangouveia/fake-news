
import ArrowIcon from './Arrow';

interface ButtonPrimaryProps {
  title: string;
}

export const ButtonPrimary = ({ title }: ButtonPrimaryProps) => {
  return (
    <button className="h-16 w-40 bg-primary rounded flex gap-2 items-center justify-center font-bold text-white shadow-2xl hover:opacity-95">
      {title}
      <ArrowIcon
        _className='shrink-0 fill-white'
        width={14} height={14}
      />
    </button>
  )
}