import React from 'react';

interface WordmarkProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Exact rendering of "Aliar" as shown in the screenshot:
 * - Sans-serif font family (Inter / Montserrat / Arial style bold geometric)
 * - 'A' : Capital A with clean apex
 * - 'l' : Lowercase l with standard height
 * - 'i' : Square tittle dot with proper separation
 * - 'a' : Single-story geometric rounded lowercase 'a'
 * - 'r' : Clean lowercase 'r'
 * - Color: #10597d (official petrol blue)
 */
export const AliarWordmark: React.FC<WordmarkProps> = ({
  className = '',
  size = 38,
  color = '#10597d',
}) => {
  return (
    <span
      className={`font-black tracking-tight select-none leading-none inline-block ${className}`}
      style={{
        fontSize: `${size}px`,
        color: color,
        fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontWeight: 900,
        letterSpacing: '-0.03em',
      }}
    >
      Aliar
    </span>
  );
};
