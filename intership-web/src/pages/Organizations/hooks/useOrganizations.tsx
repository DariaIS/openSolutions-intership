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

  return {
    dispatch,
    handleAddModal
  };
};
