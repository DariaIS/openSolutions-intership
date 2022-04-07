import React from 'react';

import s from './styles.module.scss';

type IModal = {
  isOpen: boolean,
  closeModalHandler: () => {
    payload: undefined,
    type: string
  }
};

export const Modal: React.FC<IModal> = ({ children, isOpen, closeModalHandler }) => {
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
        <a
          onClick={closeModalHandler}
          onKeyDown={closeModalHandler}
          role="button"
          tabIndex={0}
          className={s.closeButton} 
        >
          close
        </a>
        <div className={s.content}>{children}</div>
      </div>
    </>
  );
};