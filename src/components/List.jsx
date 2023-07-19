import PropTypes from 'prop-types';
import BookstoreItem from './Item';
import styles from '../styles/List.module.css';

const List = (props) => {
  const { books } = props;

  return (
    <div>
      <ul className={styles.books}>
        {books.map((book) => (
          <BookstoreItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            progress={book.progress}
            chapter={book.chapter}
          />
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
      progress: PropTypes.string,
      chapter: PropTypes.string,
    }),
  ).isRequired,
};

export default List;
