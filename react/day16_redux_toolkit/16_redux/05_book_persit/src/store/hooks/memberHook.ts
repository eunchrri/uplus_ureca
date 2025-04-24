import { Member } from "@/types/member";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login, logout } from "@/store/slices/memberSlice";
import { useCallback } from "react";

export const useAuth = () => {
  //////////TODO 6. useAppDispatch 함수로 부터 dispatch 전달받기
  const dispatch = useAppDispatch();

  //////////TODO 7. useAppSelector 함수로 부터 member State 전달받기
  const memberState = useAppSelector((state) => state.member.member);

  //////////TODO 8. dispatch함수로 login action  선언하기
  const singIn = useCallback((member: Member) => dispatch(login(member)), [dispatch]);

  //////////TODO 9. dispatch함수로 logout action 선언하기
  const signOut = useCallback(() => dispatch(logout()), [dispatch]);

  //////////TODO 10. 상태와 action함수 return 하기
  return { memberState, login: singIn, logout: signOut, isLoggedIn: !!memberState };
};
