import { useAppDispatch } from '../../../hooks/index';

export const useEmployee = () => {
  const dispatch = useAppDispatch();

  return {
    dispatch
  };
};
