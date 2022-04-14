import React, { ButtonHTMLAttributes } from 'react';

import { AddButton } from './components/AddButton';
import { BackButton } from './components/BackButton';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonStyle: string
};

export const Button: React.FC<Props> = ({ children, buttonStyle, ...rest }) => {
  switch (buttonStyle) {
    case 'add':
      return ( 
        <AddButton {...rest}>
          {children}
        </AddButton>
      );
    case 'back':
      return (
        <BackButton {...rest}>
          {children}
        </BackButton>
      );
    default:
      return (
        <button type="button" {...rest}>
          {children}
        </button>
      );
  }
};
