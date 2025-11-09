import { FaArrowRight, FaMoneyBills } from 'react-icons/fa6';
import Badge from './Badge';
import { PiLightning, PiUsersThree } from 'react-icons/pi';
import BenefitItem from './BenefitItem';
import { IoMdTime } from 'react-icons/io';
import { BiCheckCircle } from 'react-icons/bi';
import Button from './Button';

const benefitsData = [
  {
    id: 'B1',
    icon: <FaMoneyBills />,
    title: 'Cost Saving',
    details: 'Identify unnecessary spend and optimize procurement costs.',
  },
  {
    id: 'B2',
    icon: <IoMdTime />,
    title: 'Time Efficiency',
    details: 'Reduce manual entry with automated tracking and reporting.',
  },
  {
    id: 'B2',
    icon: <BiCheckCircle />,
    title: 'Improved Accuracy',
    details: 'Minimize errors with data integration and real-time updates.',
  },
  {
    id: 'B2',
    icon: <PiUsersThree />,
    title: 'Collaboration & Transparency',
    details:
      'Keep your team on the same page with shared access and approvals.',
  },
];

const Benefits = () => {
  return (
    <section className='flex flex-col items-center'>
      <Badge icon={<PiLightning />}>BENEFITS</Badge>
      <h1 className='text-3xl px-4 md:px-0 md:text-5xl text-center text-black leading-12 d:leading-16 md:w-1/2 my-6 md:my-10'>
        Why Spendive?
      </h1>

      <section className='flex flex-col md:flex-row px-4 gap-12 md:gap-8 w-full mx-4 md:px-24 my-6 md:my-20'>
        <div className='w-full'>
          <img src='/benefits.svg' alt='why spendive' />
        </div>
        <div className='w-full flex flex-col justify-between'>
          <div className='w-full space-y-10  mb-10 md:mb-0'>
            {benefitsData.map((benefit) => (
              <BenefitItem key={benefit.id} benefit={benefit} />
            ))}
          </div>
          <div>
            <Button iconPosition='right' icon={<FaArrowRight />}>
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Benefits;
