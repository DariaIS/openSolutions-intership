import React, { ButtonHTMLAttributes } from 'react';

import { AddBackButton } from './components/AddBackButton';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonStyle: string
};

export const Button: React.FC<Props> = ({ children, buttonStyle, ...rest }) => {
  switch (buttonStyle) {
    case 'add':
    case 'back':
      return ( 
        <AddBackButton buttonStyle={buttonStyle} {...rest}>
          {children}
        </AddBackButton>
      );
    default:
      return (
        <button type="button" {...rest}>
          {children}
        </button>
      );
  }
};
