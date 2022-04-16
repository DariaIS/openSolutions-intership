import React from 'react';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';
import { useChangeOrganization } from './hooks/useChangeOrganization';

import s from '../../style.module.scss';

type Props = { 
  id: number,
  closeModalHandler: () => {
    payload: undefined,
    type: string
  }
};

export const ChangeOrganization: React.FC<Props> = ({ id, closeModalHandler }) => {
  const { handleInputChange, handleChangeOrganization, error, organizationName, address, INN } = useChangeOrganization();
  
  return (
    <div className={s.elements}>
      <h2 className={s.title}>Change Organization</h2>
      {error.length > 0 && <div className={s.error}>{error}</div>}
      <div className={s.inputsSection}>
        <span className={s.inputTitle}>Organization Name</span>
        <Input name='organizationName' inputStyle='component' type="text" value={organizationName} onChange={handleInputChange} />
        
        <span className={s.inputTitle}>Organization Address</span>
        <Input name='address' inputStyle='component' type="text" value={address} onChange={handleInputChange} />            
        
        <span className={s.inputTitle}>Organization&apos;s INN</span>
        <Input name='INN' inputStyle='component' type="text" value={INN} onChange={handleInputChange} />
      </div>
      <div className={s.buttonsSection}>
        <Button buttonStyle='cancel' onClick={closeModalHandler}/>
        <Button buttonStyle='accept' onClick={() => handleChangeOrganization(id, closeModalHandler)}>Change</Button>
      </div>
    </div>
  );
};