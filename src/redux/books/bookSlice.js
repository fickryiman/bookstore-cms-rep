import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // const bookId = action.payload;
      // state.bookItems.push(bookId);
      state.books = [
        ...state.books, {
          id: Math.floor(Math.random() * 100),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookItems = state.bookItems.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
