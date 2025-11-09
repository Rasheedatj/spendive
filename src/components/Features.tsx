import { PiLightning } from 'react-icons/pi';
import FeatureCard from './FeatureCard';
import Badge from './Badge';

const featuresData = [
  {
    id: 'f1',
    title: 'Expense Management',
    details:
      'Set limits, monitor spending patterns, and get alerts to avoid budget overruns.',
    image: '/expense_management.svg',
  },
  {
    id: 'f2',
    title: 'Smarter Procurement & Approvals',
    details:
      'Simplify purchasing with integrated procurement workflows, approval processes, and supplier management.',
    image: '/smarter.svg',
  },
  {
    id: 'f3',
    title: 'Vendor & Supplier Management',
    details:
      'Easily onboard, evaluate, and monitor suppliers to strengthen relationships and negotiate better terms.',
    image: '/vendor_supplier.svg',
  },
  {
    id: 'f4',
    title: 'Seamless Integration',
    details:
      'Connect Spendive with your existing accounting software for smooth data flow and increased accuracy.',
    image: '/seamless.svg',
  },
  {
    id: 'f5',
    title: 'Corporate Card',
    details:
      'Connect Spendive with your existing accounting software for smooth data flow and increased accuracy.',
    image: '/corporate.svg',
  },
  {
    id: 'f6',
    title: 'Efficient Spend Tracking',
    details:
      'Keep track of every expense in real-time with automated data syncing and comprehensive reporting.',
    image: '/tracking.svg',
  },
];

const Features = () => {
  return (
    <section className='py-20 flex flex-col items-center'>
      <Badge icon={<PiLightning />}>KEY FEATURES</Badge>

      <h1 className='text-3xl px-4 md:px-0 lg:text-5xl text-center text-black leading-12 lg:leading-16 md:w-1/2 my-6 md:my-10'>
        Effortless Spend Management for Modern Businesses.
      </h1>

      <section className='md:grid-cols-2 grid gap-4 lg:gap-8 mx-4 md:mx-10 lg:mx-24 mt-10'>
        {featuresData.map((feature) => (
          <FeatureCard feature={feature} />
        ))}
      </section>
    </section>
  );
};

export default Features;
