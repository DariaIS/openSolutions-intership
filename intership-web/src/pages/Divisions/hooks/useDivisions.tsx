import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../../hooks/index';


export const useDivisions = () => {
  const dispatch = useAppDispatch();

  return {
    dispatch,
  };
};
