import Footer from './Footer';
import Navbar from './Navbar';
import Projects from './Projects';

export default function Hero() {
  return (
    <div className='flex h-svh flex-col justify-between'>
      <div
        id='hero'
        className='mx-(--site--margin) mt-(--site--margin) mb-fl-2 flex h-full flex-col justify-between'
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
