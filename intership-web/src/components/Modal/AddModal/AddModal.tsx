import React from 'react';

import { IActionModal } from '../IActionModal';
import { AddOrganization } from './Organization';

export const AddModal: React.FC<IActionModal> = ({ componentName, componentId, closeModalHandler }) => {
  
  return (
    <div> 
      {
        componentName === 'Organization' &&
        <AddOrganization id={componentId} closeModalHandler={closeModalHandler}/>
      }
    </div>
  );
};