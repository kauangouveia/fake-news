import Image, { StaticImageData } from "next/image"
import { ButtonPrimary } from "../UI/ButtonPrimary";

interface TopNewsProps {
  image: StaticImageData
  description: string;
  title: string;
}

export const TopNews = ({ description, image, title }: TopNewsProps) => {
  return(
    <div className="w-full max-w-[1980px] h-full flex items-center justify-center flex-col px-6 md:px-10">
    <div className="relative w-full max-w-[1280px] min-h-[780px] md:min-h-[580px] flex flex-col md:flex-row">
      <span className="absolute z-50 w-full h-1/2 md:w-[52%] md:h-full rounded-2xl">
        <Image
          src={image}
          alt="covid"
          className="w-full h-full object-cover rounded-2xl"
          height={500}
          width={500}
        />
      </span>
      <span className="absolute z-40 md:right-5 w-full md:w-1/2 h-[800px] md:h-full rounded-2xl md:items-start justify-end md:justify-center flex flex-col gap-6 bg-gray-100 p-6 md:px-16">
        <h2 className="font-bold text-2xl text-black">{title}</h2>
        <p className="text-base">{description}</p>
        <ButtonPrimary title='Veja' />
      </span>
    </div>
  </div>
  )
}