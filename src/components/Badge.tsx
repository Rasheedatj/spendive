import { type ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  children: ReactNode;
}

const Badge = ({ children, icon }: Props) => {
  return (
    <div className='flex items-center px-4 py-2 rounded-3xl gap-2 bg-[#EBF5FF80] border-[0.2px] border-[#D1E6FF]'>
      {icon}
      <p className='text-[10px] text-black'>{children}</p>
    </div>
  );
};

export default Badge;
