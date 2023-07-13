import { useState } from 'react';
import styles from '../styles/Input.module.css';

const Input = () => {
  const [state, setState] = useState({
    book: '',
    category: '',
  });

  // const authors = ['Fickry Bil Iman', 'Suzanne Collins', 'Frank Herbert'];

  // const authorOptions = authors.map((author) => (
  //   <option value={author} key={author.id}>
  //     {author}
  //   </option>
  // ));

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.value]: e.target.value,
    });
  };

  return (
    <section>
      <h2 className={styles.formTitle}>ADD NEW BOOK</h2>
      <form className={styles.addForm}>
        <input
          name="book"
          type="text"
          placeholder="Book Title"
          className={`${styles.input} ${styles.titleInput}`}
          onChange={handleChange}
        />
        <select
          id="category"
          name="category"
          type="text"
          className={`${styles.input} ${styles.categoryInput}`}
          onChange={handleChange}
        >
          <option disabled>Author</option>
          <option value="Fickry Bil Iman">Fickry Bil Iman</option>
          <option value="Suzanne Collins">Suzanne Collins</option>
          <option value="Frank Herbert">Frank Herbert</option>
          {/* {authorOptions} */}
        </select>
        <button
          type="submit"
          className={styles.primaryButtonBig}
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Input;
