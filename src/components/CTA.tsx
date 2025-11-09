import Button from './Button';
import { FaArrowRight } from 'react-icons/fa6';

const CTA = () => {
  return (
    <section className='rounded-4xl bg-primary-600 py-10 lg:py-20 px-10 lg:px-16 mx-4 md:mx-10 lg:mx-20 mt-10 mb-20'>
      <article className='lg:w-1/2 space-y-6 lg:space-y-10'>
        <h1 className='font-semibold text-3xl leading-12 lg:text-[56px] lg:leading-20 text-white'>
          Take Control of Your Spending Today!
        </h1>
        <div>
          <p className='text-[#F6F6F6] leading-8 text-sm md:text-base'>
            Ready to transform your financial management?
          </p>
          <p className='text-[#F6F6F6] leading-8 text-sm md:text-base'>
            Start your free trial with Spendive and see how effortless spend and
            procurement management can be.
          </p>
        </div>

        <Button iconPosition='right' icon={<FaArrowRight />} mode='white'>
          Get Started for Free
        </Button>
      </article>
    </section>
  );
};

export default CTA;
