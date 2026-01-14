import React from 'react';

interface IconProps {
  src: string;
  alt?: string;
  className?: string;
  invert?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  src,
  alt = '',
  className = '',
  invert = false,
}) => {
  const filterStyle = invert ? { filter: 'brightness(0) invert(1)' } : {};

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={filterStyle}
    />
  );
};
