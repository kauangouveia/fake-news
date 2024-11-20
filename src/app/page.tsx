"use client";

import notebook from "@/assets/notebook.png";
import Image from "next/image";
import { Banner } from './components/Banner';
import { Companies } from './components/Companies';
import { ContentNews } from './components/ContentNews';
import { FakeNewsBrazil } from "./components/FakeNewsBrasil";
import { Footer } from "./components/Footer/Index";
import { Graph } from "./components/graph";
import { Header } from "./components/Header";
import { SearchNews } from './components/SearchNews';
import { ButtonPrimary } from './components/UI/ButtonPrimary';
import { ButtonSecondary } from './components/UI/ButtonSecondary';
import { AboutUS } from "./components/AboutUs";

export default function Home() {
  return (
    <section className="w-screen h-screen flex flex-col gap-8 items-center overflow-x-hidden bg-secondaryDefault">
      <div className="w-full h-auto flex flex-col gap-20 justify-center items-center">

        <Header />

        <div className="w-full md:min-h-[750px] flex flex-col items-center">

          <div className="w-full h-80 max-w-[1980px] flex flex-col gap-4 items-center justify-center">
            <span className="flex flex-col gap-1 justify-center items-center text-center">
              <h2 className="text-2xl md:text-5xl font-bold text-white">Fake news impactam diariamente</h2>
              <h3 className="text-2xl md:text-5xl font-bold text-primaryDefault flex gap-4"><FakeNewsBrazil /> brasileiros</h3>
            </span>
            <div className="w-full flex gap-4 items-end justify-center mt-8">
              <ButtonPrimary title='Nosso gráfico' onClick={() => window.location.href = '#graph'} />
              <ButtonSecondary title='Sobre nós' onClick={() => window.location.href = '#about-us'} />
            </div>
          </div>



          <Image src={notebook} alt="banner" />
        </div>

        <Banner />
        <Companies />
        <SearchNews />
        <AboutUS />
        <ContentNews />
        <Graph />

        <Footer />
      </div>


    </section>
  );
}
