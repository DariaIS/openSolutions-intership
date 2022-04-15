import React from 'react';

import { selectModal, closeModal } from '../../models/modal/slice';
import { useAppSelector, useAppDispatch } from '../../hooks/index';

import { ModalTemplate } from './layout/index';
import { AddModal } from './AddModal';
import { DeleteModal } from './DeleteModal';
import { ChangeModal } from './ChangeModal';
import { IActionModal } from './IActionModal';

// type Props = {
//   isOpen: boolean,
//   childrenProps: object,
//   closeModalHandler: object
// };

export const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, componentName, typeOfModal, componentId } = useAppSelector(selectModal);

  const closeModalHandler = () => dispatch(closeModal());
  let renderComponent: JSX.Element | null = null;

  const modalsLookUp = { AddModal, ChangeModal, DeleteModal };
  if (typeOfModal) {
    const SelectedComponent: React.FC<IActionModal> = modalsLookUp[typeOfModal];
    if (SelectedComponent) {
      renderComponent = <SelectedComponent componentName={componentName} componentId={componentId} closeModalHandler={closeModalHandler}/>;
    }
  }

  return (
    <ModalTemplate isOpen={isOpen} closeModalHandler={closeModalHandler}>
      {renderComponent}
    </ModalTemplate>
  );
};