import BookstoreList from './List';
import BookstoreInput from './Input';
import styles from '../styles/Bookstore.module.css';

const Bookstore = () => (
  <div className={styles.container}>
    <BookstoreList />
    <div className={styles.horizontalDivider} />
    <BookstoreInput />
  </div>
);

export default Bookstore;
