import Image from "next/image"
import instagram from '@/assets/instagram.png'
import whatsapp from '@/assets/whatsapp.png'

export const Footer = () => {
  return (
    <footer className="w-full h-48 border-t border-gray-50 flex justify-center items-center -mt-16" id="footer">
      <div className="w-full max-w-[1980px] h-full flex items-start justify-between p-4 md:px-24 md:py-10">
        <div className="flex gap-2 md:gap-16">
          <span className="flex flex-col gap-8 w-full max-w-20 flex-shrink-0">
            <h2 className="text-sm md:text-base font-bold text-primaryDefault">Contato</h2>
            <a className="text-white text-xs md:text-sm font-semibold" href="#">E-mail</a>
            <a className="text-white text-xs md:text-sm font-semibold" href="#">Telefone</a>
          </span>
          <span className="flex flex-col gap-8 w-full max-w-20 flex-shrink-0">
            <h2 className="text-sm md:text-base font-bold text-primaryDefault">Sobre nós</h2>
            <a className="text-white text-xs md:text-sm font-semibold" href="#about-us">Missão</a>
            <a className="text-white text-xs md:text-sm font-semibold" href="#about-us">Nós</a>
          </span>
          <span className="flex flex-col gap-8 w-full max-w-20 flex-shrink-0">
            <h2 className="text-sm md:text-base font-bold text-primaryDefault">Pesquisa</h2>
            <a className="text-white text-xs md:text-sm font-semibold" href="#news">Noticias</a>
            <a className="text-white text-xs md:text-s font-semibold" href="#search">Busca</a>
          </span>
        </div>


        <div className="flex flex-col gap-8">
          <h2 className="text-sm md:text-base font-bold text-primaryDefault">Redes sociais</h2>
          <div className="flex gap-4">
              <Image src={instagram} alt='instagram' width={30} height={30}/>
              <Image src={whatsapp} alt='whatsapp' width={30} height={30}/>
          </div>
        </div>
      </div>
    </footer>
  )
}