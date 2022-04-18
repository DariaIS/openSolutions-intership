import React from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import { useAddDivision } from './hooks/useAddDivision';

import s from '../../style.module.scss';

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
    <div className={s.elements}>
      <h2 className={s.title}>Add Division</h2>
      {error.length > 0 && <div className={s.error}>{error}</div>}
      <div className={s.inputsSection}>
        <span className={s.inputTitle}>Division Name</span>
        <Input name='divisionName' inputStyle='component' type="text" value={divisionName} onChange={handleInputChange} />            

        <span className={s.inputTitle}>Division&apos;s Phone</span>
        <Input name='phone' inputStyle='component' type="text" value={phone} onChange={handleInputChange} />            
      </div>
      <div className={s.buttonsSection}>
        <Button buttonStyle='cancel' onClick={closeModalHandler}/>
        <Button buttonStyle='accept' onClick={() => handleAddDivision(id, Number(organizationId), closeModalHandler)}>Add</Button>
      </div>
    </div>
  );
};