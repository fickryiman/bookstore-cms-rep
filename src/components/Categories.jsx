import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categorySlice';
import styles from '../styles/Categories.module.css';
import styles2 from '../styles/Input.module.css';

const Categories = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const status = useSelector((state) => state.categoriesReducer);

  return (
    <>
      <button
        type="submit"
        className={`${styles.primaryButtonBig} ${styles2.checkStatus}`}
        onClick={() => {
          setMessage(status);
          dispatch(checkStatus());
        }}
      >
        Check Status
      </button>
      <p className={styles.message}>{message}</p>
    </>
  );
};

export default Categories;
