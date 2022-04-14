import React from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import { useChangeDivision } from './hooks/useChangeDivision';

type Props = { 
  id: number,
  closeModalHandler: () => {
    payload: undefined,
    type: string
  }
};

export const ChangeDivision: React.FC<Props> = ({ id, closeModalHandler}) => {
  const { handleInputChange, handleChangeDivision, error, divisionName, phone } = useChangeDivision();
  const { organizationId } = useParams();
  
  return (
    <div>
      <p>Change Division</p>
      {error.length > 0 && <p>{error}</p>}
      <p>Division Name</p>
      <Input name='divisionName' type="text" value={divisionName} onChange={handleInputChange} />            
      {/* <Input name='divisionName' type="text" value={divisionName} onChange={handleInputChange} /> */}
      <p>Division&apos;s Phone</p>
      <Input name='phone' type="text" value={phone} onChange={handleInputChange} />            

      <Button buttonStyle='' onClick={closeModalHandler}>Cancel</Button>
      <Button buttonStyle='' onClick={() => handleChangeDivision(id, Number(organizationId), closeModalHandler)}>Change</Button>
    </div>
  );
};