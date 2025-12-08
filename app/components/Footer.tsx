import TINAVO from '../../public/images/TINA_VO.svg';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-end'>
      <div className='links flex w-full items-end justify-between px-(--site--margin) pb-[3rem]'>
        <div id='email' className='flex flex-col gap-4'>
          <p className='u-text-style-h6'>Say hello!</p>
          <p className='u-text-style-main uppercase'>tina.webdev@gmail.com</p>
        </div>

        <div id='socials' className='flex flex-col gap-4'>
          <p className='u-text-style-h6'>Socials</p>
          <a
            href='https://github.com/tinaaiscoding'
            className='u-text-style-main uppercase'
          >
            Github
          </a>
          <a
            href='https://www.linkedin.com/in/tinanhivo/'
            className='u-text-style-main uppercase'
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div id='footer-svg-wrapper' className='w-full h-full'>
        <div className='flex w-full justify-center overflow-y-clip border-t border-current'>
          <TINAVO className='fill-current' />
        </div>
      </div>
    </footer>
  );
}
