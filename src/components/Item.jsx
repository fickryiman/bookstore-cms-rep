import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';
import styles from '../styles/Item.module.css';

const Item = (props) => {
  const dispatch = useDispatch();

  const {
    id, title, author, category, progress, chapter,
  } = props;

  return (
    <li>
      <div className={styles.book}>
        <div className={styles.bookContent}>
          <div className={styles.bookInfo}>
            <h4 className={styles.bookCategory}>{category}</h4>
            <h2 className={styles.bookTitle}>{title}</h2>
            <h6 className={styles.bookAuthor}>{author}</h6>
            <div className={styles.actionButtons}>
              <button className={styles.buttonOutline} type="button">
                Comments
              </button>
              <div className={styles.verticalDivider} />
              <button
                className={styles.buttonOutline}
                type="button"
                onClick={() => dispatch(removeBook(id))}
              >
                Remove
              </button>
              <div className={styles.verticalDivider} />
              <button className={styles.buttonOutline} type="button">
                Edit
              </button>
            </div>
          </div>
          <div className={styles.progressContainer}>
            <div className={styles.circularProgressContainer}>
              <div className={styles.circularProgress} />
            </div>
            <div className={styles.progressStat}>
              <p className={styles.percentComplete}>
                {progress}
                %
              </p>
              <p className={styles.completed}>Completed</p>
            </div>
            <div className={styles.progressDivider} />
            <div className={styles.currentChapterContainer}>
              <div>
                <p className={styles.currentChapterLabel}>CURRENT CHAPTER</p>
                <p className={styles.currentChapter}>{chapter}</p>
              </div>
              <div>
                <button className={styles.primaryButton} type="button">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Item;
