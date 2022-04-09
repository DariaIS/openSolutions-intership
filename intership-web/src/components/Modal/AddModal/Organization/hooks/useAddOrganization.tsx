import { ChangeEventHandler, useState } from 'react';

import { useAppDispatch } from '../../../../../hooks/index';
import { fetchAddOrganization } from '../../../../../models/organizations/actions/fetchAddOrganization';

export const useAddOrganization = () => {
  const [error, setError] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [address, setAddress] = useState('');
  const [INN, setINN] = useState('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value, name },
  }) => {
    switch (name) {
      case 'name':
        setOrganizationName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'INN':
        setINN(value);
        break;
      default:
        break;
    }
  };

  const dispatch = useAppDispatch();

  const handleAddOrganization = (
    id: number, 
    closeModalHandler: () => {
      payload: undefined,
      type: string
    }) => {
    if (!organizationName.trim() || !address.trim() || Number(INN) === 0) {
      setError('too empty =(');
    }
    else if (Number.isNaN(Number(INN)) || INN.length !== 10) {
      setError('Please, Provide valid detials!');
    }
    else {
      fetchAddOrganization(organizationName, address, Number(INN));
      closeModalHandler();
    }

  };

  return {
    handleInputChange,
    handleAddOrganization,
    error,
    organizationName,
    address,
    INN
  };
};
