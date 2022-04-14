import React, { ButtonHTMLAttributes } from 'react';

import { ReactComponent as BackIcon } from './icons/back.svg';

import s from './backButton.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  someProp?: any;
};

export const BackButton: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button className={s.button} type="button" {...rest}>
      <BackIcon className={s.backIcon}/>
      {children}
    </button>
  );
};
