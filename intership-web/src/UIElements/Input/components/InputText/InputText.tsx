import React, { InputHTMLAttributes } from 'react';

import s from '../input.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  inputStyle: string
};

export const InputText: React.FC<Props> = ({ value, inputStyle, ...rest }) => {
  return <input type="text" className={`${inputStyle === 'signin' ? s.inputSignin : s.inputComponent}`} value={value} {...rest} />;
};
