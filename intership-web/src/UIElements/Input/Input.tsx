import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { InputText } from './components/InputText';
import { InputPassword } from './components/InputPassword';

type Props = {
  type: HTMLInputTypeAttribute;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ type, ...rest }) => {
  switch (type) {
    case 'text':
      return <InputText {...rest} />;
    case 'password':
      return <InputPassword {...rest} />;
    case 'number':
      return null;
    default:
      return null;
  }
};
