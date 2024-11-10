"use client";

import Image from "next/image";
import { FakeNewsBrazil } from "./components/FakeNewsBrasil";
import { Header } from "./components/Header";
import { ButtonPrimary } from './components/UI/ButtonPrimary';
import { ButtonSecondary } from './components/UI/ButtonSecondary';
import notebook from "@/assets/notebook.png";
import { ContentNews } from './components/ContentNews';
import { Companies } from './components/Companies';
import { Banner } from './components/Banner';
import { SearchNews } from './components/SearchNews';

export default function Home() {
  return (
    <section className="w-screen h-screen flex flex-col items-center overflow-x-hidden bg-background">
      <div className="w-full h-auto flex flex-col justify-center items-center">

        <Header />

        <div className="w-full md:min-h-[750px] flex flex-col items-center pt-8">

          <div className="w-full h-80 max-w-[1980px] flex flex-col gap-4 items-center justify-center">
            <span className="flex flex-col gap-1 justify-center items-center text-center">
              <h2 className="text-2xl md:text-5xl font-bold text-white">Fake news impactam diariamente</h2>
              <h3 className="text-2xl md:text-5xl font-bold text-primary flex gap-4"><FakeNewsBrazil /> brasileiros</h3>
            </span>
            <div className="w-full flex gap-4 items-end justify-center mt-8">
              <ButtonPrimary title='Nosso gráfico' />
              <ButtonSecondary title='Sobre nós' />
            </div>
          </div>

          <Image src={notebook} alt="banner" />
        </div>

        <Banner />
        <Companies />
        <SearchNews />
        <ContentNews />
      </div>


    </section>
  );
}
