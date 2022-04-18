import React, { ButtonHTMLAttributes } from 'react';

import { ReactComponent as AddIcon } from './icons/add.svg';
import { ReactComponent as BackIcon } from './icons/back.svg';

import s from './addBackButton.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonStyle: string
};

export const AddBackButton: React.FC<Props> = ({ children, buttonStyle, ...rest }) => {
  return ( 
    <button className={s.button} type="button" {...rest}>
      {buttonStyle === 'add' && <AddIcon className={s.icon} width={20} height={20}/>}
      {buttonStyle === 'back' && <BackIcon className={s.icon} width={16} height={15}/>}
      {children}
    </button>
  );
};