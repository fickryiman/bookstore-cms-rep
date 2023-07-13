import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Bookstore from './components/Bookstore';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Bookstore />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
