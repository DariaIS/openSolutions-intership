import React, { ButtonHTMLAttributes } from 'react';

import s from './cancelButton.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const CancelButton: React.FC<Props> = ({ children, ...rest }) => {
  return ( 
    <button className={s.button} type="button" {...rest}>
      Cancel
    </button>
  );
};