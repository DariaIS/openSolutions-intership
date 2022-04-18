import { ChangeEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'src/hooks/index';

import { IDivision } from 'Src/models/divisions/IDivision';
import { IEmployee } from 'Src/models/employee/IEmployee';
import { IOrganization } from 'Src/models/organizations/IOrganization';

import { openModal } from 'src/models/modal/slice';

export const useComponentTable = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNavigate = (componentName: string, obj: IOrganization | IDivision | IEmployee) => {
    if (componentName === 'Organization')
      return navigate(`/organizations/${obj.id}`)

    if ('id_organization' in obj)
      return navigate(`/organizations/${obj.id_organization}/${obj.id}`)
  };

  const handleChangeModal = (componentName: string, id: number) => {
      dispatch(openModal({
        componentName,
        typeOfModal: 'ChangeModal',
        componentId: id
      }))
    };
  
    const handleDeleteModal = (componentName: string, id: number) => {
      dispatch(openModal({
        componentName,
        typeOfModal: 'DeleteModal',
        componentId: id
      }))
    };

  return {
    handleNavigate,
    handleChangeModal,
    handleDeleteModal
  };
};
