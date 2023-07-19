/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/bookSlice';
import styles from '../styles/Input.module.css';

const Input = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      category,
    };
    setTitle('');
    setCategory('');
    dispatch(addBook(book));
  };

  return (
    <section>
      <h2 className={styles.formTitle}>ADD NEW BOOK</h2>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Book Title"
          value={title}
          className={`${styles.input} ${styles.titleInput}`}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          name="category"
          type="text"
          value={category}
          className={`${styles.input} ${styles.categoryInput}`}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled>Author</option>
          <option value="Fickry Bil Iman">Fickry Bil Iman</option>
          <option value="Suzanne Collins">Suzanne Collins</option>
          <option value="Frank Herbert">Frank Herbert</option>
        </select>
        <button type="submit" className={styles.primaryButtonBig}>
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Input;
