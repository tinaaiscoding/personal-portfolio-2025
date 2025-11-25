import Footer from '../Footer';
import Navbar from '../Navbar';
import './Hero.css';

export default function Hero() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <div id='hero'>
        <Navbar />
        <main></main>
      </div>
      <Footer />
    </div>
  );
}
