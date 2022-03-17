import React, { ButtonHTMLAttributes } from 'react';
import s from './styles.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  someProp?: any;
};

export const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
};
