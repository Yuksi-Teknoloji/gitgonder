import React from 'react';

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
    <a
      href={href}
      className={`
        text-base font-medium transition-colors duration-200
        ${
          active
            ? 'text-orange'
            : 'text-gray hover:text-orange'
        }
        ${className}
      `}
    >
      {children}
    </a>
  );
};
