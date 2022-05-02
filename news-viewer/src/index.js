import { ReactDOM } from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from '../node_modules/react-router-dom/index';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
