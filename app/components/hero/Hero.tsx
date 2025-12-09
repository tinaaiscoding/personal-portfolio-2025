'use client';

import { useGSAP } from '@gsap/react';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

import { useMousePosition } from '@/app/utils/hooks/useMousePosition';

import Logo from '../../../public/images/Logo_SVG.svg';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Projects from '../Projects';
import { cursorAnimation } from './animation';
import './styles.css';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const cursor = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();

  useGSAP(
    () => {
      if (cursor.current) {
        cursorAnimation(cursor.current, x, y);
      }
    },
    { dependencies: [x, y] },
  );

  const [lightTheme, setLightTheme] = useState<boolean>(true);

  useEffect(() => {
    document.body.classList.toggle('u-theme-light', lightTheme);
    document.body.classList.toggle('u-theme-dark', !lightTheme);
  }, [lightTheme]);

  return (
    <div className='flex h-svh flex-col justify-between'>
      <div ref={cursor} id='cursor'></div>
      <div
        id='navbar-mask'
        className='u-theme-dark pb-fl-2 absolute flex w-full flex-col justify-between px-(--site--margin) pt-(--site--margin)'
      >
        <div className='w-col-m-6 flex items-center gap-(--site--gutter)'>
          <div>
            <Logo
              className='h-[52px] w-[66px] fill-current'
              onClick={() => setLightTheme(!lightTheme)}
            />
          </div>
          <p className='u-text-style-h5 uppercase'>Frontend / Web Dev</p>
        </div>
      </div>
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
  );
}
