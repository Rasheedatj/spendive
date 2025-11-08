import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import Button from './Button';
import type { NavItem } from '../utils/types';
const navItems: NavItem[] = [
  {
    title: 'Products',
    hasMenu: true,
  },
  {
    title: 'Solutions',
    hasMenu: true,
  },
  {
    title: 'Customers',
    hasMenu: false,
  },
  {
    title: 'Pricing',
    hasMenu: false,
  },
  {
    title: 'Blog',
    hasMenu: false,
  },
];

const Headerr = () => {
  return (
    <section className='flex items-center justify-between p-4 md:px-8 md:py-6 border-b border-offwhite'>
      <div className='curpsor-pointer w-1/3 md:w-fit'>
        <img src='/Logo.svg' alt='spendive logo' />
      </div>

      <nav className='hidden lg:block'>
        <ul className='flex items-center gap-10'>
          {navItems.map((item) => (
            <li
              key={item.title}
              className='flex cursor-pointer duration-200 transition-all hover:text-primary-500 items-center gap-2 text-black font-medium'
            >
              {item.title}
              {item.hasMenu && <FaChevronDown />}
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex items-center gap-2 md:gap-4'>
        <p className='text-primary-500 font-medium text-sm md:text-base'>
          Log in
        </p>
        <Button iconPosition='right' icon={<FaArrowRight />}>
          Book a Demo
        </Button>
      </div>
    </section>
  );
};

export default Headerr;
