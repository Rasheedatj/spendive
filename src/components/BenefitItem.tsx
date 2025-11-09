import type { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  details: string;
}

const BenefitItem = ({ benefit }: { benefit: Props }) => {
  const { icon, title, details } = benefit;
  return (
    <div className='flex gap-4 lg:gap-10 '>
      <div className='w-10 h-10 lg:w-12 lg:h-12 rounded-[10px] lg:rounded-2xl text-lg lg::text-xl bg-[#F4F9FF] border border-[#D1E6FF] grid place-items-center text-primary-500'>
        {icon}
      </div>
      <article>
        <h2 className='text-lg lg:text-2xl font-medium mb-4 md:mb-2 lg:mb-4'>
          {title}
        </h2>
        <p className='text-[#5D5D5D] leading-7 text-sm lg:text-base'>
          {details}
        </p>
      </article>
    </div>
  );
};

export default BenefitItem;
