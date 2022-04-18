import React from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import { useChangeDivision } from './hooks/useChangeDivision';

import s from '../../style.module.scss';

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
    <div className={s.elements}>
      <h2 className={s.title}>Change Division</h2>
      {error.length > 0 && <div className={s.error}>{error}</div>}
      <div className={s.inputsSection}>
        <span className={s.inputTitle}>Division Name</span>
        <Input name='divisionName' inputStyle='component' type="text" value={divisionName} onChange={handleInputChange} />            
        
        <span className={s.inputTitle}>Division&apos;s Phone</span>
        <Input name='phone' inputStyle='component' type="text" value={phone} onChange={handleInputChange} />            
      </div>
      <div className={s.buttonsSection}>
        <Button buttonStyle='cancel' onClick={closeModalHandler}/>
        <Button buttonStyle='accept' onClick={() => handleChangeDivision(id, Number(organizationId), closeModalHandler)}>Change</Button>
      </div>
    </div>
  );
};