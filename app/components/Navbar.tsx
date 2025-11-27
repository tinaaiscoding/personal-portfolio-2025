'use client';

import { useEffect, useState } from 'react';

import Logo from '../../public/images/Logo_SVG.svg';

export default function Navbar() {
  const [lightTheme, setLightTheme] = useState<boolean>(true);

  useEffect(() => {
    document.body.classList.toggle('u-theme-light', lightTheme);
    document.body.classList.toggle('u-theme-dark', !lightTheme);
  }, [lightTheme]);

  return (
    <nav className='grid grid-cols-12 items-center gap-(--site--gutter)'>
      <div className='justify-self-center'>
        <Logo
          className='h-[52px] w-[66px] fill-current'
          onClick={() => setLightTheme(!lightTheme)}
        />
      </div>
      <p className='u-text-style-h5 col-span-3 uppercase'>Frontend / Web Dev</p>
      <p className='u-text-style-h5 col-span-2 col-start-7 uppercase'>
        Melbourne, AU
      </p>
      <button className='u-text-style-large w-col-2 col-start-12 justify-self-end uppercase'>
        Open for work
      </button>
    </nav>
  );
}
