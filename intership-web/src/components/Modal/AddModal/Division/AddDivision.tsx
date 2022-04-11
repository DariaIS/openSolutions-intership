import React from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import { useAddDivision } from './hooks/useAddDivision';

type Props = { 
  id: number,
  closeModalHandler: () => {
    payload: undefined,
    type: string
  }
};

export const AddDivision: React.FC<Props> = ({ id, closeModalHandler}) => {
  const { handleInputChange, handleAddDivision, error, divisionName, phone } = useAddDivision();
  const { organizationId } = useParams();
  
  return (
    <div>
      <p>Add Division</p>
      {error.length > 0 && <p>{error}</p>}
      <p>Division Name</p>
      <Input name='divisionName' type="text" value={divisionName} onChange={handleInputChange} />            
      {/* <Input name='divisionName' type="text" value={divisionName} onChange={handleInputChange} /> */}
      <p>Division&apos;s Phone</p>
      <Input name='phone' type="text" value={phone} onChange={handleInputChange} />            

      <Button onClick={closeModalHandler}>Cancel</Button>
      <Button onClick={() => handleAddDivision(id, Number(organizationId), closeModalHandler)}>Add</Button>
    </div>
  );
};