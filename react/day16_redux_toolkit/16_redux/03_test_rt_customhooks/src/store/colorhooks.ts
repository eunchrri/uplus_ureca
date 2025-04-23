import { useDispatch } from "react-redux";
import { useAppSelector } from "./hooks";
import { useCallback } from "react";
import { changeColor, changeSubColor } from "./colorSlice";

export const useColorHooks = () => {
  const color = useAppSelector((state) => state.color.color);
  const subColor = useAppSelector((state) => state.color.subColor);

  const dispatch = useDispatch();

  const setColor = useCallback(
    (color: string) => {
      dispatch(changeColor(color));
    },
    [dispatch]
  );
  const setSubColor = useCallback(
    (color: string) => {
      dispatch(changeSubColor(color));
    },
    [dispatch]
  );

  return { color, subColor, changeColor: setColor, changeSubColor: setSubColor };
};
