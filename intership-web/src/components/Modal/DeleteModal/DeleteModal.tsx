import React from 'react';

import { Button } from 'Common/UI/Button';
import { IActionModal } from '../IActionModal';
import { fetchDeleteOrganization } from '../../../models/organizations/actions/fetchDeleteOrganization';
import { useAppDispatch } from '../../../hooks/index';

export const DeleteModal: React.FC<IActionModal> = ({ componentName, componentId, closeModalHandler }) => {
  const dispatch = useAppDispatch();
  
  const handleDelete = () => {
    if (componentName === 'Organization')
      dispatch<any>(fetchDeleteOrganization(componentId));
    closeModalHandler();
  };

  return (
    <div>
      <p>Delete {componentName} component with id - {componentId}?</p>
      <Button onClick={closeModalHandler}>Cancel</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};