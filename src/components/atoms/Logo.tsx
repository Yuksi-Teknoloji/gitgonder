import React from 'react';
import logoImage from '../../assets/logo.png';

interface LogoProps {
  src?: string;
  alt?: string;
  text?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  src,
  alt = 'Yuksi Logo',
  className = '',
}) => {
  const logoSrc = src || logoImage;

  return (
    <img
      src={logoSrc}
      alt={alt}
      className={`h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto ${className}`}
    />
  );
};
