import React from 'react';

import { selectModal, closeModal } from '../../models/modal/slice';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { Modal } from './layout/Modal';
// const actions = {openModal, closeModal};

type Props = {
  isOpen: boolean,
  childrenProps: object,
  closeModalHandler: object
};

export const ModalManager: React.FC<Props> = () => {
    const dispatch = useAppDispatch();
    const { isOpen, componentName } =
        useAppSelector(selectModal);

    const closeModalHandler = () => dispatch(closeModal());
    let renderComponent = '';

    const componentsLookUp = { };
    if (componentName) {
      const SelectedComponent = componentsLookUp[componentName];
      if (SelectedComponent) {
        let renderComponent = <SelectedComponent/>;
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