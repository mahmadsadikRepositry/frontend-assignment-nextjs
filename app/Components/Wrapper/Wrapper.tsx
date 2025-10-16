// app/Components/Wrapper/Wrapper.tsx
import React from 'react';
import clsx from 'clsx';

type WrapperProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  max?: 'md' | 'lg' | 'xl' | '7xl';
};

const maxMap = {
  md: 'max-w-3xl',
  lg: 'max-w-4xl',
  xl: 'max-w-6xl',
  '7xl': 'max-w-7xl',
};

export function Wrapper({ children, as, className, max = '7xl' }: WrapperProps) {
  const Component = (as || 'div') as React.ElementType;

  return (
    <Component
      className={clsx(
        // container base: centered, responsive padding
        maxMap[max],
        'mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
}