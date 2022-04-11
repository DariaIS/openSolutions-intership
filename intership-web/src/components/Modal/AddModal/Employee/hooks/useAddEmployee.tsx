import { ChangeEventHandler, useState } from 'react';

import { useAppDispatch } from 'src/hooks/index';
import { fetchAddEmployee } from 'src/models/employee/actions/fetchAddEmployee';

export const useAddEmployee = () => {
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

  const handleAddEmployee = (
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
      fetchAddEmployee(idDivision, FIO, address, position);
      closeModalHandler();
    }

  };

  return {
    handleInputChange,
    handleAddEmployee,
    error,
    FIO,
    address,
    position
  };
};
