import { useAppDispatch } from 'src/hooks/index';
import { openModal } from 'src/models/modal/slice';

export const useDivisions = () => {
  const dispatch = useAppDispatch();

  const handleAddModal = () => {
    dispatch(openModal({
      componentName: 'Division',
      typeOfModal: 'AddModal',
      componentId: null!
    }))
  };

  return {
    dispatch,
    handleAddModal
  };
};
