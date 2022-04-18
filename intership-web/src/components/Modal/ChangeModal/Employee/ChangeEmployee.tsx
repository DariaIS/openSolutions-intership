import React from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import { useChangeEmployee } from './hooks/useChangeEmployee';

import s from '../../style.module.scss';

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
    <div className={s.elements}>
      <h2 className={s.title}>Change Employee</h2>
      {error.length > 0 && <div className={s.error}>{error}</div>}
      <div className={s.inputsSection}>
        <span className={s.inputTitle}>FIO</span>
        <Input name='FIO' inputStyle='component' type="text" value={FIO} onChange={handleInputChange} />
        
        <span className={s.inputTitle}>Employee Address</span>
        <Input name='address' inputStyle='component' type="text" value={address} onChange={handleInputChange} />            
        
        <span className={s.inputTitle}>Employee&apos;s position</span>
        <Input name='position' inputStyle='component' type="text" value={position} onChange={handleInputChange} />
      </div>
      <div className={s.buttonsSection}>
        <Button buttonStyle='cancel' onClick={closeModalHandler}/>
        <Button buttonStyle='accept' onClick={() => handleChangeEmployee(id, Number(divisionId), closeModalHandler)}>Change</Button>
      </div>
    </div>
  );
};