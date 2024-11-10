import COVID from '@/assets/COVID.png';
import dengue from '@/assets/dengue.png';
import eleicao from '@/assets/eleicao.png';
import { TopNews } from '../News';


const topNews = [
  {
    title: "Vacinas contra covid causam câncer",
    description: "Não há evidências que provem que vacinas causem tumores. Teorias conspiratórias são desmentidas por órgãos de saúde como a OMS e o CDC. Estudos confirmam que vacinas são seguras e eficazes, sem riscos de tumores.",
    image: COVID,
  },
  {
    title: "Houve fraude nas eleicoes de 2024?",
    description: "À reportagem, a Record confirmou que a instabilidade foi causada por problemas no sistema de uma empresa terceirizada, mas afirmou que o erro foi corrigido em poucos minutos. Segundo apuração do Estadão...",
    image: dengue,
  },
  {
    title: "Ivermectina pode curar dengue?",
    description: "O Ministério da Saúde não reconhece o uso do remédio para a doença, pois não há evidências científicas que comprovem sua eficácia contra infecções virais em humanos. Infectologistas reforçam que o medicamento não tem ação antiviral confirmada e não é recomendado para esse tipo de tratamento.",
    image: eleicao,
  },
]

export const ContentNews = () => {
  return (
    <div className="w-full min-h-[500px] flex flex-col items-center justify-center gap-16">
      <h2 className="text-center font-bol text-2xl md:text-4xl text-white">A realidade mundial é <br /> moldada pelas <span className="text-primary">fake news</span></h2>
      {topNews.map((item, index) => (
        <TopNews description={item.description} image={item.image} title={item.title} key={index}/>
      ))}
    </div>
  )
}