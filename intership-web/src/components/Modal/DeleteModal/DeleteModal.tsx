import React from 'react';

import { Button } from 'Common/UI/Button';
import { useAppDispatch } from 'src/hooks/index';

import { fetchDeleteOrganization } from 'src/models/organizations/actions/fetchDeleteOrganization';
import { fetchDeleteDivision } from 'src/models/divisions/actions/fetchDeleteDivision';
import { fetchDeleteEmployee } from 'src/models/employee/actions/fetchDeleteEmployee';

import { IActionModal } from '../IActionModal';

import s from '../style.module.scss';

export const DeleteModal: React.FC<IActionModal> = ({ componentName, componentId, closeModalHandler }) => {
  const dispatch = useAppDispatch();
  
  const handleDelete = () => {
    switch (componentName) {
      case 'Organization':
        dispatch<any>(fetchDeleteOrganization(componentId));
        closeModalHandler();
        break;
      case 'Division':
        dispatch<any>(fetchDeleteDivision(componentId));
        closeModalHandler();
        break;
      case 'Employee':
        dispatch<any>(fetchDeleteEmployee(componentId));
        closeModalHandler();
        break;
      default:
        break;
    }
  };

  return (
    <div className={s.elements}>
      <h2 className={s.title}>Delete {componentName} with id - {componentId}?</h2>
      <div className={s.buttonsSection}>
        <Button buttonStyle='cancel' onClick={closeModalHandler} />
        <Button buttonStyle='delete' onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
};