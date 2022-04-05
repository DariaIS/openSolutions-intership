import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';

import s from './styles.module.scss';

// const actions = {openModal, closeModal};

type Props = {
  isOpen: boolean,
  closeModalHandler: object
};

export const Modal: React.FC<Props> = ({ children, isOpen, closeModalHandler }) => {
  return (
    <React.Fragment>
      <div
        onClick={() => closeModalHandler}
        className={`${s.backDrop} ${isOpen ? s.show : s.hide}`}
      >
      </div>
      <div className={`${s.сontainer} ${isOpen ? s.show : s.hide}`}>
        <a className={s.closeButton} onClick={() => closeModalHandler}>
          close
        </a>
        <div className={s.content}>{children}</div>
      </div>
    </React.Fragment>
  );
};

// export default connect(null, actions)(Modal);
