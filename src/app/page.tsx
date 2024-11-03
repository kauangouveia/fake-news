"use client";

import { AboutUS } from "./components/AboutUs";
import { FakeNewsBrazil } from "./components/FakeNewsBrasil";
import { Header } from "./components/Header";
import { FakeNews } from "./components/News";
import { SearchNews } from "./components/SearchNews";

export default function Home() {
  return (
    <section className="w-screen h-screen flex flex-col items-center overflow-x-hidden">
      <main className="w-full max-w-[1980px]  flex flex-col items-center">
        <Header />
        <FakeNews />
        <FakeNewsBrazil />
        <AboutUS />
        <SearchNews/>
      </main>
    </section>
  );
}
