import { useAppDispatch } from 'src/hooks/index';
import { openModal } from 'src/models/modal/slice';

export const useEmployee = () => {
  const dispatch = useAppDispatch();

  const handleAddModal = () => {
    dispatch(openModal({
      componentName: 'Employee',
      typeOfModal: 'AddModal',
      componentId: null!
    }))
  };

  const handleChangeModal = (id: number) => {
    dispatch(openModal({
      componentName: 'Employee',
      typeOfModal: 'ChangeModal',
      componentId: id
    }))
  };

  const handleDeleteModal = (id: number) => {
    dispatch(openModal({
      componentName: 'Employee',
      typeOfModal: 'DeleteModal',
      componentId: id
    }))
  };

  return {
    dispatch,
    handleAddModal,
    handleChangeModal,
    handleDeleteModal
  };
};
