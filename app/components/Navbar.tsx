'use client';

import Logo from '../../public/images/Logo_SVG.svg';
import { useLogoContext } from '../utils/context/logo';

export default function Navbar() {
  const { setLogoHovered } = useLogoContext();
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
        <button className='u-text-style-large whitespace-nowrap uppercase'>
          Open for work
        </button>
      </div>
    </nav>
  );
}
