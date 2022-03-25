import React, { InputHTMLAttributes } from 'react';
import s from './styles.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  someProp?: any;
};

export const InputPassword: React.FC<Props> = ({ value, ...rest }) => {
  return <input type="password" value={value} {...rest} />;
};
