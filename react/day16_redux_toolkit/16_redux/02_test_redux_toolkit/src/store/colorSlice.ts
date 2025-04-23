import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//////////TODO 1. state를 위한 타입 선언하기
interface ColorState {
  color: string;
  subColor: string;
}

//////////TODO 2. slice에서 사용할 초기값 선언하기
const initialState: ColorState = {
  color: "black",
  subColor: "red",
};

//////////TODO 3. slice선언하기 {슬라이스이름, 초기값, reducers}
const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeColor(state, action: PayloadAction<string>) {
      // redux에서 state를 immer라는 불변성 객체로 유지하고 있기 때문에
      // 상태를 직접 수정해도 된다.
      state.color = action.payload;
    },
    changeSubColor(state, action: PayloadAction<string>) {
      state.subColor = action.payload;
    },
  },
});

//////////TODO 4. slicer가 제공하는 action함수들 export 하기
////////// redux-toolkit이 reducers 함수를 기반으로 만들어주는 action 함수
////////// reducer 이름과 동일하다.
////////// ex) changeColor, changeSubColor
export const { changeColor, changeSubColor } = colorSlice.actions;

//////////TODO 5. reducer export 하기
export default colorSlice.reducer;
