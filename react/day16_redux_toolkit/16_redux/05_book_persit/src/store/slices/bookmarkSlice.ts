import { Book } from "@/types/book";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//////////TODO B1.Bookmark state를 위한 타입 선언하기
interface BookMarkState {
  bookmark: Book[];
}

//////////TODO B2. slice에서 사용할 초기값 선언하기
const initialState: BookMarkState = {
  bookmark: [],
};

//////////TODO B3. slice선언하기   reducers[registBookMark, removeBookMark, clearBookMark]
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    registBookMark: (state, action: PayloadAction<Book>) => {
      const isExist = state.bookmark.find((book) => book.isbn === action.payload.isbn);
      if (!isExist) {
        state.bookmark = [...state.bookmark, action.payload];
        // state.bookmark.push(action.payload);
      }
    },
    removeBookMark: (state, action: PayloadAction<{ isbn: string }>) => {
      state.bookmark = state.bookmark.filter((book) => book.isbn !== action.payload.isbn);
    },
    clearBookMark: (state) => {
      state.bookmark = [];
    },
  },
});

//////////TODO B4. slicer가 제공하는 action함수들 export 하기
export const { registBookMark, removeBookMark, clearBookMark } = bookmarkSlice.actions;

//////////TODO B5. reducer export 하기
export default bookmarkSlice.reducer;
