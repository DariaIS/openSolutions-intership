import { useAppDispatch } from '../../../hooks/index';
import { openModal } from '../../../models/modal/slice';

export const useOrganizations = () => {
  const dispatch = useAppDispatch();

  const handleAddModal = (id: number) => {
    dispatch(openModal({
      componentName: 'Organization',
      typeOfModal: 'AddModal',
      componentId: id
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
