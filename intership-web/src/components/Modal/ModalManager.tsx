import React from 'react';

import { selectModal, closeModal } from '../../models/modal/slice';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { Modal } from './layout/index';
import { RemoveModal } from './RemoveModal';
import { ChangeModal } from './ChangeModal';

// const actions = {openModal, closeModal};

// type Props = {
//   isOpen: boolean,
//   childrenProps: object,
//   closeModalHandler: object
// };

export const ModalManager: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, componentName } = useAppSelector(selectModal);

  const closeModalHandler = () => dispatch(closeModal());
  let renderComponent: JSX.Element | null = null;

  const componentsLookUp = { ChangeModal, RemoveModal };
  if (componentName) {
    const SelectedComponent = componentsLookUp[componentName];
    if (SelectedComponent) {
      renderComponent = <SelectedComponent/>;
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