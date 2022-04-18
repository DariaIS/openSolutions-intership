import React, { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  someProp?: any;
};

export const InputCheckbox: React.FC<Props> = ({ value, ...rest }) => {
  return <input type="checkbox" value={value} {...rest} />;
};
