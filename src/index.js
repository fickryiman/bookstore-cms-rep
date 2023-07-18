import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// import redux store and redux provider
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

export default App;
