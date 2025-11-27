import Lenis, { LenisOptions } from 'lenis';
import { useEffect, useRef } from 'react';

export function useLenisScroll<T extends HTMLElement>(
  options: Partial<LenisOptions> = {},
) {
  const lenisRef = useRef<Lenis | null>(null);
  const wrapperRef = useRef<T | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    
    const lenis = new Lenis({wrapper, ...options});

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return { wrapperRef, lenis: lenisRef };
}
