import React from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import { useAddEmployee } from './hooks/useAddEmployee';

type Props = { 
  id: number,
  closeModalHandler: () => {
    payload: undefined,
    type: string
  }
};

export const AddEmployee: React.FC<Props> = ({ id, closeModalHandler}) => {
  const { handleInputChange, handleAddEmployee, error, FIO, address, position } = useAddEmployee();
  const { organizationId, divisionId } = useParams();
  
  return (
    <div>
      <p>Add Employee</p>
      {error.length > 0 && <p>{error}</p>}
      <p>FIO</p>
      <Input name='FIO' type="text" value={FIO} onChange={handleInputChange} />
      <p>Employee Address</p>
      <Input name='address' type="text" value={address} onChange={handleInputChange} />            
      <p>Employee&apos;s position</p>

      <Input name='position' type="text" value={position} onChange={handleInputChange} />
      <Button onClick={closeModalHandler}>Cancel</Button>
      <Button onClick={() => handleAddEmployee(id, Number(divisionId), closeModalHandler)}>Add</Button>
    </div>
  );
};