import React, { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const AcceptButton: React.FC<Props> = ({ children, ...rest }) => {
  return ( 
    <button type="button" {...rest}>
      {children}
    </button>
  );
};