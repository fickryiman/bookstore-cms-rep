/* eslint-disable react/prop-types */
import styles from '../styles/List.module.css';
import BookstoreItem from './Item';

const List = ({ bookstores }) => (
  <div>
    <ul className={styles.books}>
      {bookstores.map((bookstore) => (
        <BookstoreItem bookstore={bookstore} key={bookstore.id} />
      ))}
    </ul>
  </div>
);

export default List;
