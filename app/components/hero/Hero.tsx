'use client';

import { useGSAP } from '@gsap/react';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

import { LogoProvider } from '../../utils/context/logo';
import { ProjectListHoverProvider } from '../../utils/context/projectListHover';
import { useMousePosition } from '../../utils/hooks/useMousePosition';
import Footer from '../Footer';
import Navbar from '../Navbar';
import NavbarMask from '../navbarMask/NavbarMask';
import Projects from '../projects/Projects';
import {
  animateCursorExit,
  animateCursorMove,
  animateMaskCursorMove,
  animateMaskReveal,
} from './animations';
import './styles.css';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const [logoHovered, setLogoHovered] = useState<boolean>(false);
  const [projectListHovered, setProjectListHovered] = useState<boolean>(false);

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorTlRef = useRef<gsap.core.Timeline | null>(null);
  const maskedElRef = useRef<HTMLDivElement | null>(null);
  const maskedElTlRef = useRef<gsap.core.Timeline | null>(null);

  const { x, y } = useMousePosition();

  useEffect(() => {
    if (!cursorRef.current || !maskedElRef.current) return;

    cursorTlRef.current = animateCursorExit(cursorRef.current);
    maskedElTlRef.current = animateMaskReveal(maskedElRef.current);

    gsap.set(maskedElRef.current, { visibility: 'visible' });
  }, []);

  useGSAP(
    () => {
      if (!cursorTlRef.current) return;

      if (projectListHovered) {
        cursorTlRef.current.play();
      } else {
        cursorTlRef.current.progress(1).reverse();
      }
    },
    { dependencies: [projectListHovered] },
  );

  useGSAP(
    () => {
      if (!maskedElTlRef.current) return;

      if (logoHovered) {
        maskedElTlRef.current.play();
      } else {
        maskedElTlRef.current.progress(1).reverse();
      }
    },
    { dependencies: [logoHovered] },
  );

  useGSAP(
    () => {
      if (!cursorRef.current || !maskedElRef.current) return;

      animateCursorMove(cursorRef.current, x, y);

      animateMaskCursorMove(maskedElRef.current, x, y);
    },
    { dependencies: [x, y] },
  );

  return (
    <LogoProvider value={{ logoHovered, setLogoHovered }}>
      <ProjectListHoverProvider
        value={{ projectListHovered, setProjectListHovered }}
      >
        <div className='flex h-svh flex-col justify-between'>
          <div ref={cursorRef} id='cursor'></div>

          <NavbarMask ref={maskedElRef} />

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
      </ProjectListHoverProvider>
    </LogoProvider>
  );
}
