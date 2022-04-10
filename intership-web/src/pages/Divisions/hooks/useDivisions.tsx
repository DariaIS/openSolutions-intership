import { useAppDispatch } from 'src/hooks/index';
import { openModal } from 'src/models/modal/slice';

export const useDivisions = () => {
  const dispatch = useAppDispatch();

  const handleChangeModal = (id: number) => {
    dispatch(openModal({
      componentName: 'Division',
      typeOfModal: 'ChangeModal',
      componentId: id
    }))
  };

  const handleDeleteModal = (id: number) => {
    dispatch(openModal({
      componentName: 'Division',
      typeOfModal: 'DeleteModal',
      componentId: id
    }))
  };

  return {
    dispatch,
    handleChangeModal,
    handleDeleteModal
  };
};
