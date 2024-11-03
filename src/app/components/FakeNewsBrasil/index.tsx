'use client'

import { useState, useEffect } from 'react';

export const FakeNewsBrazil = () => {
  const [count, setCount] = useState(0);
  const target = 93000000;
  const increment = Math.ceil(target / 100);
  const intervalTime = 50;
  const resetTime = 20000;

  useEffect(() => {
    const startCounting = () => {
      setCount(0);
      const intervalId = setInterval(() => {
        setCount(prevCount => {
          const newCount = prevCount + increment;
          if (newCount >= target) {
            clearInterval(intervalId);
            return target;
          }
          return newCount;
        });
      }, intervalTime);


      const resetId = setTimeout(() => {
        clearInterval(intervalId);
        startCounting();
      }, resetTime);

      return () => {
        clearInterval(intervalId);
        clearTimeout(resetId);
      };
    };

    startCounting();
  }, []);

  return (
    <div className="w-full h-[680px] flex flex-col gap-12 items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 p-8 md:p-0" >
      <div className='w-full md:w-[480px] flex flex-col gap-2 items-center justify-center text-center'>
        <h1 className='font-bold text-3xl'>{count.toLocaleString()}+</h1>
        <p className="font-bold text-xl md:text-2xl ">Brasileiros recebem fake news diariamente, representando cerca de 44% da população.</p>
      </div>
      <a href="#searchNews" id="#fakenewsBrasil" className='p-4 flex items-center justify-center font-bold text-black h-11 bg-white border border-black rounded-xl hover:bg-opacity-85'>FAÇA SUA CHECAGEM</a>
    </div>
  );
};
