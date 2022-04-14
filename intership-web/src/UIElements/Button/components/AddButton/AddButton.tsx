import React, { ButtonHTMLAttributes } from 'react';

import { ReactComponent as AddIcon } from './icons/add.svg';

import s from './addButton.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  someProp?: any;
};

export const AddButton: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <button className={s.button} type="button" {...rest}>
      <AddIcon className={s.addIcon}/>
      {children}
    </button>
  );
};