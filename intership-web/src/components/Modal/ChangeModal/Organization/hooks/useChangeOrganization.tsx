import { ChangeEventHandler, useState } from 'react';

import { useAppDispatch } from '../../../../../hooks/index';
import { fetchChangeOrganization } from '../../../../../models/organizations/actions/fetchChangeOrganization';

export const useChangeOrganization = () => {
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

  const handleChangeOrganization = (id: number) => {
    if (!organizationName.trim() || !address.trim() || Number(INN) !== 0) {
      setError('too empty =(');
    }
    else if (Number.isNaN(Number(INN))) {
      setError('Please, Provide valid detials!');
    }
    else {
      dispatch<any>(fetchChangeOrganization(id, organizationName, address, Number(INN)));
    }

  };

  return {
    handleInputChange,
    handleChangeOrganization,
    error,
    organizationName,
    address,
    INN
  };
};
