import styles from '../styles/Categories.module.css';

const Categories = () => (
  <div className={styles.container}>
    <p className={styles.category}>Action</p>
    <p className={styles.category}>Science Fiction</p>
    <p className={styles.category}>Economy</p>
  </div>
);

export default Categories;
