import React from 'react';

import { Button } from 'Common/UI/Button';
import { useAppDispatch } from 'src/hooks/index';

import { fetchDeleteOrganization } from 'src/models/organizations/actions/fetchDeleteOrganization';
import { fetchDeleteDivision } from 'src/models/divisions/actions/fetchDeleteDivision';
import { fetchDeleteEmployee } from 'src/models/employee/actions/fetchDeleteEmployee';

import { IActionModal } from '../IActionModal';

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
    <div>
      <p>Delete {componentName} component with id - {componentId}?</p>
      <Button buttonStyle='' onClick={closeModalHandler}>Cancel</Button>
      <Button buttonStyle='' onClick={handleDelete}>Delete</Button>
    </div>
  );
};