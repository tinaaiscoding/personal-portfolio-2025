import Footer from './Footer';
import Navbar from './Navbar';
import Projects from './Projects';

export default function Hero() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <div id='hero' className='flex flex-col h-full justify-between m-(--site--margin)'>
        <Navbar />
        <main>
          <Projects />
        </main>
      </div>
      <Footer />
    </div>
  );
}
