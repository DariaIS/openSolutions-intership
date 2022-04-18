import React, { ButtonHTMLAttributes } from 'react';

import s from './acceptDeleteButton.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonStyle: string
};

export const AcceptDeleteButton: React.FC<Props> = ({ children, buttonStyle, ...rest }) => {
  return ( 
    <button className={`${s.button} ${buttonStyle === 'accept' ? s.accept : s.delete}`} type="button" {...rest}>
      {children}
    </button>
  );
};