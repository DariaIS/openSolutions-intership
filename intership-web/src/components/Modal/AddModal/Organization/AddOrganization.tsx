import React from 'react';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import { useAddOrganization } from './hooks/useAddOrganization';

type Props = { 
  id: number,
  closeModalHandler: () => {
    payload: undefined,
    type: string
  }
};

export const AddOrganization: React.FC<Props> = ({ id, closeModalHandler }) => {
  const { handleInputChange, handleAddOrganization, error, organizationName, address, INN } = useAddOrganization();
  
  return (
    <div>
      <p>Change Organization</p>
      {error.length > 0 && <p>{error}</p>}
      <p>Organization Name</p>
      <Input name='name' type="text" value={organizationName} onChange={handleInputChange} />
      <p>Organization Address</p>
      <Input name='address' type="text" value={address} onChange={handleInputChange} />            
      <p>Organization&apos;s INN</p>

      <Input name='INN' type="text" value={INN} onChange={handleInputChange} />
      <Button onClick={closeModalHandler}>Cancel</Button>
      <Button onClick={() => handleAddOrganization(id, closeModalHandler)}>Add</Button>
    </div>
  );
};