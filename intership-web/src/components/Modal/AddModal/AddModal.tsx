import React from 'react';

import { IActionModal } from '../IActionModal';
import { AddOrganization } from './Organization';
import { AddEmployee } from './Employee';
import { AddDivision } from './Division';


export const AddModal: React.FC<IActionModal> = ({ componentName, componentId, closeModalHandler }) => {
  
  return (
    <div> 
      {
        componentName === 'Organization' &&
        <AddOrganization id={componentId} closeModalHandler={closeModalHandler}/>
      }
      {
        componentName === 'Division' &&
        <AddDivision id={componentId} closeModalHandler={closeModalHandler}/>
      }
      {
        componentName === 'Employee' &&
        <AddEmployee id={componentId} closeModalHandler={closeModalHandler}/>
      }
    </div>
  );
};