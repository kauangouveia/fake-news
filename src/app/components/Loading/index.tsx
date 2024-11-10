'use client';
import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import animationData from '@/assets/animation.json'; // ajuste o caminho conforme a estrutura do seu projeto

export const Loading = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationInstance: AnimationItem | undefined;

    if (animationContainer.current) {
      animationInstance = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData, // Passa o objeto JSON diretamente
      });
    }

    // Cleanup ao desmontar o componente
    return () => {
      animationInstance?.destroy();
    };
  }, []);

  return <div ref={animationContainer} className="h-[400px]"></div>;
};