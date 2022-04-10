import { ChangeEventHandler, useState } from 'react';

import { useAppDispatch } from 'src/hooks/index';
import { fetchChangeDivision } from 'src/models/divisions/actions/fetchChangeDivision';

export const useChangeDivision = () => {
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

  const dispatch = useAppDispatch();

  const handleChangeDivision = (
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
      dispatch<any>(fetchChangeDivision(id, organizationId, divisionName, Number(phone)));
      closeModalHandler();
    }

  };

  return {
    handleInputChange,
    handleChangeDivision,
    error,
    divisionName,
    phone
  };
};
