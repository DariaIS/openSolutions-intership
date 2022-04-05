/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IModal = { 
  componentName: string,
  // childrenProps: object
};

type IModalState = { 
  isOpen: boolean,
  componentName: string,
  // childrenProps: object
};

const initialState: IModalState = {
  isOpen: false,
  componentName: null!,
  // childrenProps: {}
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IModal>) => {
      state.isOpen = true;
      state.componentName = action.payload.componentName;
      // state.childrenProps = action.payload.childrenProps;
    },
    closeModal: (state) => {
      return initialState;
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: { modal: IModalState }) => state.modal;
export default modalSlice.reducer;