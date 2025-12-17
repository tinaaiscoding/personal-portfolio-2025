'use client';
import { useGSAP } from '@gsap/react';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

import { useMousePosition } from '@/app/utils/hooks/useMousePosition';

import Logo from '../../../public/images/Logo_SVG.svg';
import { useLogoContext } from '../../utils/context/logo';
import { getRelativePosition } from '../../utils/helperFunctions';
import ButtonMask from '../buttonMask/ButtonMask';
import { createCursorMove } from '../hero/animations';
import { animateButtonHover } from './animation';

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [buttonHovered, setButtonHovered] = useState<boolean>(false);
  const { setLogoHovered } = useLogoContext();
  const { x, y } = useMousePosition();

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const maskedButtonRef = useRef<HTMLButtonElement | null>(null);
  const maskedButtonTlRef = useRef<gsap.core.Timeline | null>(null);
  const maskMoveRef = useRef<{
    move: (x: number, y: number) => void;
  } | null>(null);

  useEffect(() => {
    if (!maskedButtonRef.current) return;

    maskedButtonTlRef.current = animateButtonHover(maskedButtonRef.current);
    maskMoveRef.current = createCursorMove(
      maskedButtonRef.current,
      '--mask-x',
      '--mask-y',
    );

    gsap.set(maskedButtonRef.current, { visibility: 'visible' });
  }, []);

  useGSAP(
    () => {
      if (!maskedButtonTlRef.current) return;

      if (buttonHovered) {
        gsap.set(maskedButtonRef.current, { display: 'flow-root' });
        maskedButtonTlRef.current.play();
      } else {
        maskedButtonTlRef.current.progress(1).reverse();
      }
    },
    { dependencies: [buttonHovered] },
  );

  useGSAP(
    () => {
      if (!maskMoveRef.current || !maskedButtonRef.current) return;

      const { relX, relY } = getRelativePosition(x, y, maskedButtonRef.current);

      maskMoveRef.current.move(relX, relY);
    },
    { dependencies: [x, y] },
  );

  return (
    <nav className='mb-fl-2 flex justify-between gap-(--site--gutter)'>
      <div
        id='navbar-left'
        className='w-col-m-6 flex items-center gap-(--site--gutter)'
      >
        <div>
          <Logo
            id='logo'
            className='h-[52px] w-[66px] fill-current'
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          />
        </div>
        <p className='u-text-style-h5 uppercase'>Frontend / Web Dev</p>
      </div>
      <div
        id='navbar-right'
        className='w-col-m-6 flex items-center justify-between'
      >
        <p id='location-text' className='u-text-style-h5 uppercase'>
          Melbourne, AU
        </p>

        <div>
          <ButtonMask
            ref={maskedButtonRef}
            setButtonHovered={setButtonHovered}
          />

          <button
            ref={buttonRef}
            className='u-text-style-large whitespace-nowrap uppercase'
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            Open for work
          </button>
        </div>
      </div>
    </nav>
  );
}
