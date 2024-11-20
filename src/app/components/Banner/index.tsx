import banner from "@/assets/banner.png";
import Image from "next/image";
import { ButtonPrimary } from "../UI/ButtonPrimary";


export const Banner = () => {
  return (
    <div className="relative w-full flex items-center justify-center h-80">
      <Image src={banner} alt="banner" className='w-full bg-cover h-full' />
      <div className='absolute top-0 w-full flex flex-col items-start justify-center p-4 md:px-32 gap-8 max-w-[1980px] h-full'>
        <span className="flex flex-col gap-10">
          <h2 className='text-white font-bold text-xl md:text-4xl'>Fake news</h2>
          <p className='text-white text-base md:text-lg'>A disseminação de fake news está  afetando a forma como 93 milhões <br /> de brasileiros percebem o mundo ao seu redor.</p>
        </span>
        <ButtonPrimary title='Pesquise' onClick={() => window.location.href = '#search'}/>
      </div>
    </div>

  )
}