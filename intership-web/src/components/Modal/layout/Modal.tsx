import React, { Fragment, MouseEventHandler, KeyboardEventHandler } from 'react';
import { connect } from 'react-redux';

import s from '../styles.module.scss';

// const actions = {openModal, closeModal};

type Props = {
  isOpen: boolean,
  closeModalHandler: () => {
    payload: undefined,
    type: string
  }
};

export const Modal: React.FC<Props> = ({ children, isOpen, closeModalHandler }) => {
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

// export default connect(null, actions)(Modal);
