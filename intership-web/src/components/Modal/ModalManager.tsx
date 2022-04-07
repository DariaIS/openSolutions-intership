import React from 'react';

import { selectModal, closeModal } from '../../models/modal/slice';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { Modal } from './layout/index';
import { RemoveModal } from './RemoveModal';
import { ChangeModal } from './ChangeModal';
import { IActionModal } from './IActionModal';

// type Props = {
//   isOpen: boolean,
//   childrenProps: object,
//   closeModalHandler: object
// };

export const ModalManager: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, componentName, typeOfModal } = useAppSelector(selectModal);

  const closeModalHandler = () => dispatch(closeModal());
  let renderComponent: JSX.Element | null = null;

  const modalsLookUp = { ChangeModal, RemoveModal };
  if (typeOfModal) {
    const SelectedComponent: React.FC<IActionModal> = modalsLookUp[typeOfModal];
    if (SelectedComponent) {
      renderComponent = <SelectedComponent componentName={componentName}/>;
    }
  }

  return (
    <Modal 
        isOpen={isOpen}
        closeModalHandler={closeModalHandler}
    >
        {renderComponent}
    </Modal>
  );
};