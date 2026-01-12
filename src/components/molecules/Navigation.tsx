import React from 'react';
import { NavLink } from '../atoms/NavLink';

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
  activeItem?: string;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  activeItem,
  className = '',
}) => {
  return (
    <nav className={`flex items-center gap-8 ${className}`}>
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          active={activeItem === item.href}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
