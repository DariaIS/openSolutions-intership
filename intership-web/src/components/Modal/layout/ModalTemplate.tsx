import React from 'react';

import s from './modalTemplate.module.scss';

type IModalTemplate = {
  isOpen: boolean,
  closeModalHandler: () => {
    payload: undefined,
    type: string
  }
};

export const ModalTemplate: React.FC<IModalTemplate> = ({ children, isOpen, closeModalHandler }) => {
  return (
    <>
      <div
        onClick={closeModalHandler}
        onKeyDown={closeModalHandler}
        role="button"
        tabIndex={0}
        className={`${s.backDrop} ${isOpen ? s.show : s.hide}`}
      />
      <div className={`${s.сontainer} ${isOpen ? s.show : s.hide}`}>
        <div className={s.content}>
          {children}
        </div>
      </div>
    </>
  );
};