import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`bg-[#141414] text-white min-h-screen p-6 ${className}`}>
      {children}
    </div>
  ); 
};

export default Container;
