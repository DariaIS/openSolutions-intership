import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import { Button } from 'Common/UI/Button';
import { Input } from 'Common/UI/Input';

import { openModal } from '../../models/modal/action';
import { closeModal } from '../../models/modal/slice';

const actions = {openModal, closeModal};

type Props = {
  isOpen: boolean,
  childrenProps: object,
  closeModalHandler: object
};

export const Modal: React.FC<Props> = ({ children, isOpen, closeModalHandler }) => {
  return (
    <React.Fragment>
      <a
        onClick={() => closeModalHandler}
      >
      </a>
      <div>
        <a className='modal-close' onClick={() => closeModalHandler}>
          close
        </a>
        <div>{children}</div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, actions)(Modal);
