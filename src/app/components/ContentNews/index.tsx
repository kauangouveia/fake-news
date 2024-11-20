import COVID from '@/assets/COVID.png';
import dengue from '@/assets/dengue.png';
import eleicao from '@/assets/eleicao.png';
import Image from 'next/image';
import { ButtonPrimary } from './../UI/ButtonPrimary';
import ArrowIcon from '../UI/Arrow';


const topNews = [
  {
    title: "Vacinas contra covid causam câncer",
    description: "Não há qualquer evidência que imunizantes causem tumores; teoria da conspiração é desmentida por órgãos de saúde e por dados coletados em todo o mundo",
    image: COVID,
    link: "https://www.estadao.com.br/estadao-verifica/ceo-pfizer-turbocancer-vacina-falso/?srsltid=AfmBOoo-VUsFa2YJRoOx8Jy1Yj9yFTfK0W1TfvZfKbYMFgqo7deHt5O7"
  },
  {
    title: "Houve fraude nas eleicoes de 2024?",
    description: "À reportagem, a Record confirmou que a instabilidade foi causada por problemas no sistema de uma empresa terceirizada, mas afirmou que o erro foi corrigido ",
    image: eleicao,
    link: "https://www.estadao.com.br/estadao-verifica/apuracao-disparou-fraude-urnas-enganoso/?srsltid=AfmBOooubSC7xaWAOMhetAJ9Ue_IIq1SQUhgT4bKD_uJtrHEO864XTc6"

  },
  {
    title: "Ivermectina pode curar dengue?",
    description: "O Ministério da Saúde não reconhece o uso do remédio, não há evidências científicas que comprovem sua eficácia contra infecções virais em humanos. ",
    image: dengue,
    link: "https://www.unasus.gov.br/especial/arboviroses/markdown/44"
  },
]

export const ContentNews = () => {
  return (
    <div className='w-full max-w-[1980px] h-auto flex flex-col px-4 xl:px-20 gap-12' id="news">
      <h2 className="text-center lg:text-star font-bold text-2xl md:text-4xl text-white">A realidade mundial é <br /> moldada pelas <span className="text-primaryDefault">fake news</span></h2>
      <div className='w-full flex flex-col lg:flex-row justify-center items-center lg:justify-evenly gap-16 xl:gap-8'>
        {topNews.map((news, index) => (
          <span className="w-full max-w-[600px] lg:h-[700px] rounded-lg flex flex-col gap-8" key={index}>
            <Image
              src={news.image}
              alt=""
              width={600}
              height={500}
              className="h-[250px] md:h-[300px] rounded-[8px]"
            />
            <h2 className="font-bold text-2xl text-white">{news.title}</h2>
            <p className="text-lg text-white font-light">{news.description}</p>
            <a className="h-16 w-40 bg-primaryDefault rounded flex gap-2 items-center justify-center font-bold text-white shadow-2xl hover:opacity-95" target='_blank' href={news.link}>
              Veja
              <ArrowIcon
                _className='shrink-0 fill-white'
                width={14} height={14}
              />
            </a>
          </span>
        ))}

      </div>
    </div>
  )
}