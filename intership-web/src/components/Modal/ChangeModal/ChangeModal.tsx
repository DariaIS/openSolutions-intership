import React from 'react';

import { IActionModal } from '../IActionModal';
import { ChangeOrganization } from './Organization';

export const ChangeModal: React.FC<IActionModal> = ({ componentName, componentId, closeModalHandler }) => {
  
  return (
    <div> 
      {
        componentName === 'Organization' &&
        <ChangeOrganization id={componentId} closeModalHandler={closeModalHandler}/>
      }
    </div>
  );
};