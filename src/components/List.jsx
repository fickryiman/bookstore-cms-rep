import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/bookSlice';
import Item from './Item';
import styles from '../styles/List.module.css';

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.bookSlice.bookList);

  return (
    <div>
      <ul className={styles.books}>
        {books.map((book) => (
          <Item
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
