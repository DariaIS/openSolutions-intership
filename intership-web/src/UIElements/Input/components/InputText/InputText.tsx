import React, { InputHTMLAttributes } from 'react';
import s from './styles.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  someProp?: any;
};

export const InputText: React.FC<Props> = ({ value, ...rest }) => {
  return <input type="text" value={value} {...rest} />;
};
