'use client';

import { useGSAP } from '@gsap/react';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

import { LogoProvider } from '@/app/utils/context/logo';
import { useMousePosition } from '@/app/utils/hooks/useMousePosition';

import Footer from '../Footer';
import Navbar from '../Navbar';
import Projects from '../Projects';
import NavbarMask from '../navbarMask/NavbarMask';
import { cursorAnimation, maskAnimation } from './animation';
import './styles.css';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const [logoHovered, setLogoHovered] = useState<boolean>(false);
  const cursor = useRef<HTMLDivElement>(null);
  const maskedEl = useRef<HTMLDivElement>(null);

  const { x, y } = useMousePosition();

  useEffect(() => {
    if (logoHovered && maskedEl.current) {
      gsap.from(maskedEl.current, {
        '--mask-size': `20px`,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [logoHovered]);

  useGSAP(
    () => {
      if (cursor.current) {
        cursorAnimation(cursor.current, x, y);
      }

      if (maskedEl.current) {
        maskAnimation(maskedEl.current, x, y);
      }
    },
    { dependencies: [x, y, logoHovered] },
  );

  return (
    <LogoProvider value={{ logoHovered, setLogoHovered }}>
      <div className='flex h-svh flex-col justify-between'>
        <div ref={cursor} id='cursor'></div>

        <NavbarMask ref={maskedEl} />

        <div
          id='hero'
          className='mb-fl-2 mx-(--site--margin) mt-(--site--margin) flex h-full flex-col justify-between'
        >
          <Navbar />
          <main>
            <Projects />
          </main>
        </div>
        <Footer />
      </div>
    </LogoProvider>
  );
}
