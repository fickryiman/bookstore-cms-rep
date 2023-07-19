const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const API_KEY = 'kgHeK1nI7U6jzRrkJKYz';
const API = `${BASE_URL}${API_KEY}`;

const addBookToAPI = async (data) => {
  const creating = await fetch(`${API}/books`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  }).then((response) => response.json());

  return creating;
};

const removeBookFromAPI = async (id) => {
  const deleting = await fetch(`${API}/books/${id}`, {
    method: 'DELETE',
  }).then((response) => response.json());

  return deleting;
};

const getBooksFromAPI = async () => {
  const reading = await fetch(`${API}/books/`).then((response) => response.json());
  return reading;
};

export { addBookToAPI, removeBookFromAPI, getBooksFromAPI };
