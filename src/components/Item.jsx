/* eslint-disable react/prop-types */
import styles from '../styles/Item.module.css';

const Item = ({ bookstore }) => (
  <li>
    <div className={styles.book}>
      <div className={styles.bookContent}>
        <div className={styles.bookInfo}>
          <h4 className={styles.bookCategory}>
            {bookstore.category}
          </h4>
          <h2 className={styles.bookTitle}>
            {bookstore.title}
          </h2>
          <h6 className={styles.bookAuthor}>
            {bookstore.author}
          </h6>
          <div className={styles.actionButtons}>
            <button className={styles.buttonOutline} type="button">Comments</button>
            <div className={styles.verticalDivider} />
            <button className={styles.buttonOutline} type="button">Remove</button>
            <div className={styles.verticalDivider} />
            <button className={styles.buttonOutline} type="button">Edit</button>
          </div>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.circularProgressContainer}>
            <div className={styles.circularProgress} />
          </div>
          <div className={styles.progressStat}>
            <p className={styles.percentComplete}>64%</p>
            <p className={styles.completed}>Completed</p>
          </div>
          <div className={styles.progressDivider} />
          <div className={styles.currentChapterContainer}>
            <div>
              <p className={styles.currentChapterLabel}>CURRENT CHAPTER</p>
              <p className={styles.currentChapter}>Chapter17</p>
            </div>
            <div>
              <button className={styles.primaryButton} type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default Item;
