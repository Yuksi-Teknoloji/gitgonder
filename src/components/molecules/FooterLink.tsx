import React from 'react';
import { Icon } from '../atoms/Icon';
import arrowRightIcon from '../../assets/icons/arrow-right.svg';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  className = '',
}) => {
  return (
    <a 
      href={href} 
      className={`flex items-center gap-2 hover:opacity-80 transition-opacity text-sm lg:text-[16px] leading-[18px] lg:leading-[19px] font-medium justify-center lg:justify-start ${className}`}
      style={{ fontFamily: 'Roboto' }}
    >
      <span>{children}</span>
      <Icon 
        src={arrowRightIcon} 
        alt="" 
        className="w-[14px] h-[14px] lg:w-[16.53px] lg:h-[15.99px] flex-shrink-0"
        invert
      />
    </a>
  );
};
