import React, { ReactNode, HTMLProps } from 'react';

interface DivProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

const Div: React.FC<DivProps> = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      {children}
    </div>
  );
};

export default Div;
