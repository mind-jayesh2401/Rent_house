import React, { ReactNode } from 'react';

interface SectionProps {
  className?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ className, children }) => {
  return (
    <section className={className}>
      {children}
    </section>
  );
};

export default Section;
