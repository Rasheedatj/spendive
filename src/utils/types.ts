import type { ReactNode } from 'react';

export interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  mode?: 'white';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export interface NavItem {
  title: string;
  hasMenu: boolean;
}
