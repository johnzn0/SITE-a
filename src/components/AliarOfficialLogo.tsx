import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Official Aliar Logo directly from the official website asset
 * (https://www.aliar.org.br/wp-content/uploads/2024/10/logo_300x300.gif)
 */
export const AliarOfficialLogo: React.FC<LogoProps> = ({
  className = '',
  size = 56,
}) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/logo_300x300.gif"
        alt="Aliar"
        width={size}
        height={size}
        className="object-contain drop-shadow-xs"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        onError={(e) => {
          // Fallback directly to the online url if needed
          e.currentTarget.src =
            'https://www.aliar.org.br/wp-content/uploads/2024/10/logo_300x300.gif';
        }}
      />
    </div>
  );
};
