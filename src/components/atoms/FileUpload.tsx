import React from 'react';

interface FileUploadProps {
  id: string;
  accept?: string;
  onChange: (file: File | null) => void;
  value?: File | null;
  placeholder?: string;
  uploadButtonText?: string;
  helperText?: string;
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  id,
  accept = '.pdf,.jpg,.jpeg,.png',
  onChange,
  value,
  placeholder = 'Dosya Yükle',
  uploadButtonText = 'Yükle',
  helperText,
  className = '',
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0] || null;
    onChange(file);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="file"
            id={id}
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor={id}
            className="w-full h-16 bg-[#FF5B04] rounded-[5px] px-6 flex items-center text-white font-semibold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] cursor-pointer"
          >
            <span className="flex-1 text-left">
              {value?.name || placeholder}
            </span>
          </label>
        </div>
        <label
          htmlFor={id}
          className="w-[114px] h-16 bg-[#3a3a3a] rounded-[5px] text-white font-bold text-base shadow-[0px_4px_15px_0px_rgba(0,0,0,0.09)] hover:bg-[#2a2a2a] transition-colors flex items-center justify-center cursor-pointer"
        >
          {uploadButtonText}
        </label>
      </div>
      {helperText && (
        <p className="text-xs text-white font-normal px-2">
          {helperText}
        </p>
      )}
    </div>
  );
};
