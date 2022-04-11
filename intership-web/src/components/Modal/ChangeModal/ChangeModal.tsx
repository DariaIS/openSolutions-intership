import React from 'react';

import { IActionModal } from '../IActionModal';
import { ChangeOrganization } from './Organization';
import { ChangeDivision } from './Division';
import { ChangeEmployee } from './Employee';

export const ChangeModal: React.FC<IActionModal> = ({ componentName, componentId, closeModalHandler }) => {
  
  return (
    <div> 
      {
        componentName === 'Organization' &&
        <ChangeOrganization id={componentId} closeModalHandler={closeModalHandler}/>
      }
      {
        componentName === 'Division' &&
        <ChangeDivision id={componentId} closeModalHandler={closeModalHandler}/>
      }
      {
        componentName === 'Employee' &&
        <ChangeEmployee id={componentId} closeModalHandler={closeModalHandler}/>
      }
    </div>
  );
};