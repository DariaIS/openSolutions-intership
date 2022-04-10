import { useAppDispatch } from 'src/hooks/index';
import { openModal } from 'src/models/modal/slice';

export const useEmployee = () => {
  const dispatch = useAppDispatch();

  const handleDeleteModal = (id: number) => {
    dispatch(openModal({
      componentName: 'Employee',
      typeOfModal: 'DeleteModal',
      componentId: id
    }))
  };

  return {
    dispatch,
    handleDeleteModal
  };
};
