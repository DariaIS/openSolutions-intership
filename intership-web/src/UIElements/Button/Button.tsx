import React, { ButtonHTMLAttributes } from 'react';

import { AddBackButton } from './components/AddBackButton';
import { CancelButton } from './components/CancelButton';
import { AcceptDeleteButton } from './components/AcceptDeleteButton';

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
      case 'cancel':
        return ( 
          <CancelButton {...rest}/>
        );
      case 'accept':
      case 'delete':
        return ( 
          <AcceptDeleteButton buttonStyle={buttonStyle} {...rest}>
            {children}
          </AcceptDeleteButton>
        );
    default:
      return (
        <button type="button" {...rest}>
          {children}
        </button>
      );
  }
};
