import React from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import { useAddEmployee } from './hooks/useAddEmployee';

import s from '../../style.module.scss';

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
    <div className={s.elements}>
      <h2 className={s.title}>Add Employee</h2>
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
        <Button buttonStyle='accept' onClick={() => handleAddEmployee(id, Number(divisionId), closeModalHandler)}>Add</Button>
      </div>
    </div>
  );
};