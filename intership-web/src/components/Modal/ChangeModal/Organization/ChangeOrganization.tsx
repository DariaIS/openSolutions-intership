import React from 'react';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import { useChangeOrganization } from './hooks/useChangeOrganization';

type Props = { 
  id: number,
  closeModalHandler: () => {
    payload: undefined,
    type: string
  }
};

export const ChangeOrganization: React.FC<Props> = ({ id, closeModalHandler}) => {
  const { handleInputChange, handleChangeOrganization, error, organizationName, address, INN } = useChangeOrganization();
  
  return (
    <div>
      <p>Change Organization</p>
      {error.length > 0 && <p>{error}</p>}
      <p>Organization Name</p>
      <Input name='organizationName' type="text" value={organizationName} onChange={handleInputChange} />
      <p>Organization Address</p>
      <Input name='address' type="text" value={address} onChange={handleInputChange} />            
      <p>Organization&apos;s INN</p>

      <Input name='INN' type="text" value={INN} onChange={handleInputChange} />
      <Button buttonStyle='' onClick={closeModalHandler}>Cancel</Button>
      <Button buttonStyle='' onClick={() => handleChangeOrganization(id, closeModalHandler)}>Change</Button>
    </div>
  );
};