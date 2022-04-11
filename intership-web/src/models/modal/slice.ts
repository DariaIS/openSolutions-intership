/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IModal = { 
  componentName: string,
  typeOfModal: string,
  componentId: number
};

type IModalState = { 
  isOpen: boolean,
  componentName: string,
  typeOfModal: string,
  componentId: number
};

const initialState: IModalState = {
  isOpen: false,
  componentName: null!,
  typeOfModal: null!,
  componentId: null!
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IModal>) => {
      state.isOpen = true;
      state.componentName = action.payload.componentName;
      state.typeOfModal = action.payload.typeOfModal;
      state.componentId = action.payload.componentId;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.componentName = null!;
      state.typeOfModal = null!;
      state.componentId = null!;
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: { modal: IModalState }) => state.modal;
export default modalSlice.reducer;