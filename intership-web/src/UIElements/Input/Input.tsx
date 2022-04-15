import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { InputText } from './components/InputText';
import { InputPassword } from './components/InputPassword';
import { InputCheckbox } from './components/InputCheckbox';

type Props = {
  type: HTMLInputTypeAttribute,
  inputStyle: string
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({ type, inputStyle, ...rest }) => {
  switch (type) {
    case 'text':
      return <InputText inputStyle={inputStyle} {...rest} />;
    case 'password':
      return <InputPassword inputStyle={inputStyle} {...rest} />;
    case 'checkbox':
      return <InputCheckbox {...rest} />;
    case 'number':
      return null;
    default:
      return null;
  }
};
