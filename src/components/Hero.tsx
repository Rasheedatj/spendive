import { FaArrowRight, FaCircle } from 'react-icons/fa';
import Button from './Button';

const Hero = () => {
  return (
    <section className='py-14 md:py-20 px-8 text-center flex-1 h-full flex flex-col items-center bg-linear-to-b from-primary-50 via-primary-100 to-primary-150'>
      <div className='flex items-center gap-3 px-2.5 py-1.5 bg-[#F8E9FF] rounded-4xl text-[#8E33FD]'>
        <FaCircle size={6} />
        <p className='font-medium  text-[10px] '>Procurement software</p>
        <FaCircle size={6} />
      </div>
      <h1 className='text-4xl md:text-5xl lg:text-[64px] text-center md:w-3/5 font-semibold leading-12 md:leading-16 lg:leading-20 my-4 md:my-6'>
        Spend Smarter, Work Faster, Save Bigger
      </h1>
      <p className='text-center text-[#5D5D5D] text-sm sm:text-base md:text-lg md:w-4/5 lg:w-[45%] mb-6 leading-5 md:leading-6'>
        Your all-in-one spend and procurement management solution designed to
        streamline business finances and improve operational efficiency.
      </p>
      <Button iconPosition='right' icon={<FaArrowRight />}>
        Book a Demo
      </Button>

      <div className='mt-10 md:mt-20'>
        <img src='/Admin Dashboard.svg' alt='Admin dashboard' />
      </div>
    </section>
  );
};

export default Hero;
