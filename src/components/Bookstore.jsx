import styles from '../styles/Bookstore.module.css';

import BookstoreList from './List';
import BookstoreInput from './Input';

const Bookstore = () => {
  const bookstores = [
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: 57,
      chapter: ['Introduction', 'Chapter1', 'Chapter2', 'Chapter3', 'Chapter4', 'Chapter5', 'Chapter6', 'Chapter7'],
    },
    {
      id: 2,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      progress: 32,
      chapter: ['Introduction', 'Chapter1', 'Chapter2', 'Chapter3', 'Chapter4', 'Chapter5', 'Chapter6', 'Chapter7'],
    },
    {
      id: 3,
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      progress: 64,
      chapter: ['Introduction', 'Chapter1', 'Chapter2', 'Chapter3', 'Chapter4', 'Chapter5', 'Chapter6', 'Chapter7'],
    },
  ];

  return (
    <div className={styles.container}>
      <BookstoreList bookstores={bookstores} />
      <div className={styles.horizontalDivider} />
      <BookstoreInput />
    </div>
  );
};

export default Bookstore;
