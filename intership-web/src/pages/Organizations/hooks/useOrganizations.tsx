import { useAppDispatch } from 'src/hooks/index';
import { openModal } from 'src/models/modal/slice';

export const useOrganizations = () => {
  const dispatch = useAppDispatch();

  const handleAddModal = () => {
    dispatch(openModal({
      componentName: 'Organization',
      typeOfModal: 'AddModal',
      componentId: null!
    }))
  };

  const handleChangeModal = (id: number) => {
    dispatch(openModal({
      componentName: 'Organization',
      typeOfModal: 'ChangeModal',
      componentId: id
    }))
  };

  const handleDeleteModal = (id: number) => {
    dispatch(openModal({
      componentName: 'Organization',
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
