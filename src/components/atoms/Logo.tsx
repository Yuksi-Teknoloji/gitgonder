import React from 'react';
import logoImage from '../../assets/gıtgonder.png';

interface LogoProps {
  src?: string;
  alt?: string;
  text?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  src,
alt = 'Gitgönder Logo',
  className = '',
}) => {
  const logoSrc = src || logoImage;

  return (
    <img
      src={logoSrc}
      alt={alt}
      className={`h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto ${className}`}
    />
  );
};
