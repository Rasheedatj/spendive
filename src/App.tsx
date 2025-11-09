import Benefits from './components/Benefits';
import Features from './components/Features';
import Headerr from './components/Headerr';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Partners from './components/Partners';

const App = () => {
  return (
    <main>
      {/* <section className='h-screen flex flex-col'> */}
      <Headerr />

      <Hero />
      <Partners />
      <Mission />
      <Features />
      <Benefits />
      {/* </section> */}
    </main>
  );
};

export default App;
