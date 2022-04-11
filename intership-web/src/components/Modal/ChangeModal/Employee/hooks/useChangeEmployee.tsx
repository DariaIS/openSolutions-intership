import { ChangeEventHandler, useState } from 'react';

import { useAppDispatch } from 'src/hooks/index';
import { fetchChangeEmployee } from 'src/models/employee/actions/fetchChangeEmployee';

export const useChangeEmployee = () => {
  const [error, setError] = useState('');
  const [FIO, setFIO] = useState('');
  const [address, setAddress] = useState('');
  const [position, setPosition] = useState('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value, name },
  }) => {
    switch (name) {
      case 'FIO':
        setFIO(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'position':
        setPosition(value);
        break;
      default:
        break;
    }
  };

  const dispatch = useAppDispatch();

  const handleChangeEmployee = (
    id: number,
    idDivision: number,
    closeModalHandler: () => {
      payload: undefined,
      type: string
    }) => {
    if (!FIO.trim() || !address.trim() || !position.trim()) {
      setError('too empty =(');
    }
    else {
      dispatch<any>(fetchChangeEmployee(id, idDivision, FIO, address, position));
      closeModalHandler();
    }

  };

  return {
    handleInputChange,
    handleChangeEmployee,
    error,
    FIO,
    address,
    position
  };
};
