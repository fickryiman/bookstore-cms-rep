import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addBookToAPI,
  removeBookFromAPI,
  getBooksFromAPI,
} from '../../API/api';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const addBook = createAsyncThunk(ADD_BOOK, async (input) => {
  addBookToAPI(input);
  return input;
});

const getBooks = createAsyncThunk(GET_BOOKS, async () => {
  const result = getBooksFromAPI();
  return result;
});

const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  removeBookFromAPI(id);
  return id;
});

const initialState = {
  bookList: [],
  status: null,
};

const handleBookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBook.fulfilled, (state, action) => {
        state.bookList.push({
          id: action.payload.item_id,
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        });
      });
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        const newBookList = [];
        Object.entries(action.payload).forEach((item) => {
          newBookList.push({
            id: item[0],
            title: item[1][0].title,
            author: item[1][0].author,
            category: item[1][0].category,
          });
        });
        // eslint-disable-next-line no-param-reassign
        state.bookList = newBookList;
      });
    builder
      .addCase(removeBook.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.bookList = state.bookList.filter((book) => book.id !== action.payload);
      });
  },
});

export default handleBookSlice.reducer;
export { addBook, getBooks, removeBook };
