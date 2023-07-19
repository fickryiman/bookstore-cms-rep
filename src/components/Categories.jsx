import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categorySlice';
import styles from '../styles/Categories.module.css';

const Categories = () => {
  const status = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="submit"
        className={styles.primaryButtonBig}
        onClick={() => dispatch(checkStatus())}
      >
        Check Status
      </button>
      <p className={styles.message}>{status}</p>
    </>
  );
};

export default Categories;
