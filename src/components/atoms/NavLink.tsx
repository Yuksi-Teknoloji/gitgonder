import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  active = false,
  className = '',
}) => {
  return (
    <Link
      to={href}
      className={`
        text-base font-medium transition-colors duration-200
        ${active
          ? 'text-primary'
          : 'text-gray hover:text-primary'
        }
        ${className}
      `}
    >
      {children}
    </Link>
  );
};
