import React, { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const CancelButton: React.FC<Props> = ({ children, ...rest }) => {
  return ( 
    <button type="button" {...rest}>
      {children}
    </button>
  );
};