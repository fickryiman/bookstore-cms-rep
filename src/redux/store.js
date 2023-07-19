import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/bookSlice';
import categoriesReducer from './categories/categorySlice';

const store = configureStore({
  reducer: {
    bookSlice,
    categoriesReducer,
  },
});

export default store;
