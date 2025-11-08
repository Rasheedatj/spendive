import type { ButtonProps } from '../utils/types';

const Button = ({
  children,
  iconPosition,
  icon,
  onClick,
  mode,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-sm md:text-base px-3 py-2 md:px-4 md:py-3 gap-2 md:gap-4 lg:px-6 lg:py-4 rounded-4xl hover:opacity-85 duration-100 transition-all cursor-pointer ${
        mode === 'white'
          ? 'bg-white text-primary-500'
          : 'bg-primary-500 text-white'
      }`}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};

export default Button;
