import React from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import { useChangeEmployee } from './hooks/useChangeEmployee';

type Props = { 
  id: number,
  closeModalHandler: () => {
    payload: undefined,
    type: string
  }
};

export const ChangeEmployee: React.FC<Props> = ({ id, closeModalHandler}) => {
  const { handleInputChange, handleChangeEmployee, error, FIO, address, position } = useChangeEmployee();
  const { organizationId, divisionId } = useParams();
  
  return (
    <div>
      <p>Change Employee</p>
      {error.length > 0 && <p>{error}</p>}
      <p>FIO</p>
      <Input name='FIO' type="text" value={FIO} onChange={handleInputChange} />
      <p>Employee Address</p>
      <Input name='address' type="text" value={address} onChange={handleInputChange} />            
      <p>Employee&apos;s position</p>

      <Input name='position' type="text" value={position} onChange={handleInputChange} />
      <Button onClick={closeModalHandler}>Cancel</Button>
      <Button onClick={() => handleChangeEmployee(id, Number(organizationId), closeModalHandler)}>Change</Button>
    </div>
  );
};