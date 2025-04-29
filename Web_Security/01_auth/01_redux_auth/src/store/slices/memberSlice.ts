import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//////////TODO M3.  상태 유지할 state의 초기값 선언하기

const authSlice = createSlice({
  //////////TODO M4. login, logout, setAccessToken 함수가 있는 reducer 선언하기
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
