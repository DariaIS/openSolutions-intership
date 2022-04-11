import { ChangeEventHandler, useState } from 'react';

import { useAppDispatch } from 'src/hooks/index';
import { fetchAddDivision } from 'src/models/divisions/actions/fetchAddDivision';

export const useAddDivision = () => {
  const [error, setError] = useState('');
  const [divisionName, setDivisionName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value, name },
  }) => {
    switch (name) {
      case 'divisionName':
        setDivisionName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleAddDivision = (
    id: number,
    organizationId: number,
    closeModalHandler: () => {
      payload: undefined,
      type: string
    }) => {
    if (!divisionName.trim() || Number(phone) === 0) {
      setError('too empty =(');
    }
    else if (Number.isNaN(Number(phone)) || phone.length !== 10) {
        setError('Please, Provide valid detials!');
      }
    else {
      fetchAddDivision(organizationId, divisionName, Number(phone));
      closeModalHandler();
    }

  };

  return {
    handleInputChange,
    handleAddDivision,
    error,
    divisionName,
    phone
  };
};
