'use client';

import { Ref, useEffect, useState } from 'react';

import Logo from '../../../public/images/Logo_SVG.svg';
import { useLogoContext } from '../../utils/context/logo';
import './styles.css';

export default function NavbarMask({ ref }: { ref: Ref<HTMLDivElement> }) {
  const [lightTheme, setLightTheme] = useState<boolean>(true);
  const { setLogoHovered } = useLogoContext();

  useEffect(() => {
    const body = document.body;
    const navbarMask = document.querySelector('#navbar-mask');

    body.classList.toggle('u-theme-light', lightTheme);
    body.classList.toggle('u-theme-dark', !lightTheme);

    if (navbarMask) {
      navbarMask.classList.toggle('u-theme-light', !lightTheme);
      navbarMask.classList.toggle('u-theme-dark', lightTheme);
    }
  }, [lightTheme]);

  return (
    <div
      ref={ref}
      id='navbar-mask'
      className='u-theme-dark invisible absolute hidden w-full flex-col justify-between px-(--site--margin) pt-(--site--margin) pb-70'
    >
      <div
        id='navbar-left-mask'
        className='w-col-m-6 flex items-center gap-(--site--gutter)'
      >
        <div>
          <Logo
            id='logo-mask'
            className='h-[52px] w-[66px] fill-current'
            onClick={() => setLightTheme(!lightTheme)}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          />
        </div>
        <p className='u-text-style-h5 uppercase'>Frontend / Web Dev</p>
      </div>
    </div>
  );
}
