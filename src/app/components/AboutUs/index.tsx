import Image from "next/image"
import uam from '@/assets/uam.png'
export const AboutUS = () => {
  return (
    <div className="h-[900px] w-full max-w-[1980px] flex flex-col items-start justify-start px-4 md:px-24 text-center" id="about-us">
      <h2 className="text-2xl md:text-3xl mb-8 text-white font-bold">Nossa missão</h2>
      <div className="w-full h-[650px] border-[4px] border-white flex flex-col text-center lg:text-start lg:flex-row items-center justify-evenly xl:gap-56 p-4">
        <h2 className="font-bold text-2xl md:text-5xl text-white w-full max-w-96 text-center">COMBATER FAKE NEWS E PROTEGER A VERDADE</h2>
        <Image
          src={uam}
          alt="Univerdade anhembi morumbi"
          width={390}
          height={515}
          className="2xl:scale-[1.7]"
        />
      </div>
      <p className="text-white xl:text-xl font-medium mt-12">Nós não nos contentamos com o comum. E você também não deveria. Temos uma missão clara: combater a desinformação e promover a verdade. Todos os dias, trabalhamos para criar ferramentas, conteúdos e experiências que ajudem as pessoas a identificar e evitar fake news. Nosso compromisso é oferecer uma análise confiável, inclusiva e acessível para todos, promovendo um ambiente digital mais seguro e transparente.</p>
    </div>
  )
}