import React from 'react';

interface ImageGalleryProps {
  images?: string[];
  className?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className = '' }) => {
  // Eğer resim yoksa placeholder göster
  const displayItems = images && images.length > 0 ? images : [1, 2, 3];

  return (
    <>
      {/* Mobile & Tablet Scrollable */}
      <div className={`xl:hidden w-full ${className}`}>
        <div 
          className="flex gap-4 overflow-x-auto py-4 [-webkit-overflow-scrolling:touch] -mx-4 px-4 justify-center"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {displayItems.map((item, index) => (
            typeof item === 'string' ? (
              <img
                key={index}
                src={item}
                alt={`Gallery image ${index + 1}`}
                className="rounded-[10px] aspect-square min-w-[150px] w-[150px] flex-shrink-0 object-cover"
              />
            ) : (
              <div 
                key={index}
                className="bg-[#FF5B04] rounded-[10px] aspect-square min-w-[150px] w-[150px] flex-shrink-0"
              />
            )
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className={`hidden xl:grid grid-cols-3 gap-4 sm:gap-6 justify-center max-w-4xl mx-auto ${className}`}>
        {displayItems.map((item, index) => (
          typeof item === 'string' ? (
            <img
              key={index}
              src={item}
              alt={`Gallery image ${index + 1}`}
              className="rounded-[10px] aspect-square w-full object-cover"
            />
          ) : (
            <div 
              key={index}
              className="bg-[#FF5B04] rounded-[10px] aspect-square w-full"
            />
          )
        ))}
      </div>
    </>
  );
};
