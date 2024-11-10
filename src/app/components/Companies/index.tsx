import google from "@/assets/google.png"
import meta from "@/assets/meta.png"
import microsoft from "@/assets/microsoft.png"
import reddit from "@/assets/reddit.png"
import twitter from "@/assets/twitter.png"
import Image from "next/image";

export const Companies = () => {
  return (
    <div className="w-full h-[440px] flex flex-col items-center justify-center gap-20 py-10 mt-12">
      <div className="w-full max-w-[1980px] h-full flex flex-col items-center justify-center">

        <h2 className="text-2xl md:text-4xl text-white font-bold text-center">
          Empresas unidas contra as <br /> <span className="text-primary">fake news</span>
        </h2>
        <div className='w-full h-full flex items-center justify-center gap-6 md:gap-40 pl-48 pr-8 md:px-0 overflow-x-scroll md:overflow-hidden'>
          <Image className="object-cover h-24 w-24 ml-8" src={google} alt="google" width={50} height={50} />
          <Image className="object-cover h-24 w-24" src={reddit} alt="reddit" width={50} height={50} />
          <Image className="object-cover h-24 w-24" src={microsoft} alt="microsoft" width={50} height={50} />
          <Image className="object-cover h-24 w-24" src={meta} alt="meta" width={50} height={50} />
          <Image className="object-cover h-24 w-24" src={twitter} alt="twitter" width={50} height={50} />
        </div>
      </div>
    </div>
  )
}