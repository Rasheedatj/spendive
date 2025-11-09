import type { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  details: string;
}

const BenefitItem = ({ benefit }: { benefit: Props }) => {
  const { icon, title, details } = benefit;
  return (
    <div className='flex gap-4 md:gap-10 '>
      <div className='w-10 h-10 md:w-12 md:h-12 rounded-[10px] md:rounded-2xl text-lg md:text-xl bg-[#F4F9FF] border border-[#D1E6FF] grid place-items-center text-primary-500'>
        {icon}
      </div>
      <article>
        <h2 className='text-lg md:text-2xl font-medium mb-4'>{title}</h2>
        <p className='text-[#5D5D5D] leading-7 text-sm md:text-base'>
          {details}
        </p>
      </article>
    </div>
  );
};

export default BenefitItem;
