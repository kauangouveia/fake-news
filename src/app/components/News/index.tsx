"use client";

import COVID from '../../assets/covid.jpg';
import dengue from '../../assets/dengue.png';
import eleicao from '../../assets/eleicao.png';
import Image from "next/image";
import { useEffect, useState } from 'react';

const news = [
  {
    image: COVID,
    title: "Vacinas contra covid causam câncer?",
    description: "Não há qualquer evidência que imunizantes causem tumores; teoria da conspiração é desmentida por órgãos de saúde e por dados coletados em todo o mundo",
    link: "https://shorturl.at/XlgSj"
  },
  {
    image: dengue,
    title: "Dengue pode ser transmitida pelo ar?",
    description: "A dengue é transmitida apenas pela picada do mosquito Aedes aegypti, não pelo ar.",
    link: "https://shorturl.at/XlgSj"
  },
  {
    image: eleicao,
    title: "Eleições de 2024 foram fraudadas?",
    description: "Não há evidências de fraude nas eleições de 2024. Os resultados foram auditados e validados.",
    link: "https://shorturl.at/XlgSj"
  }
];

export const FakeNews = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [nextNewsIndex, setNextNewsIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentNewsIndex(nextNewsIndex);
        setNextNewsIndex((nextNewsIndex + 1) % news.length);
        setIsFading(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [nextNewsIndex]);

  return (
    <div className="relative w-full h-[800px] flex items-center justify-center" id="#news">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}
        key={currentNewsIndex}
      >
        <Image
          src={news[currentNewsIndex].image}
          alt={news[currentNewsIndex].title}
          className="w-full h-full object-cover"
          layout="fill"
        />
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${isFading ? 'opacity-100' : 'opacity-0'}`}
        key={nextNewsIndex}
      >
        <Image
          src={news[nextNewsIndex].image}
          alt={news[nextNewsIndex].title}
          className="w-full h-full object-cover"
          layout="fill"
        />
      </div>

      <div className="absolute bottom-0 left-0 md:left-40 p-4 md:w-[700px] h-auto flex flex-col gap-4 text-white transition-opacity duration-1000">
        <h2 className="font-bold md:text-3xl">{news[currentNewsIndex].title}</h2>
        <p className="text-sm md:text-base">{news[currentNewsIndex].description}</p>
        <a href={news[currentNewsIndex].link} className="text-blue-300 underline">Leia mais</a>
      </div>
    </div>
  );
};
