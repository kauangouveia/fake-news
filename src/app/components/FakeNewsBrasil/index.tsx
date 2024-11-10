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

  return (<div className='font-bold text-2xl md:text-5xl'>{count.toLocaleString()}+</div>);
};
