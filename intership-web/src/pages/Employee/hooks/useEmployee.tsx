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

  return {
    dispatch,
    handleAddModal
  };
};
