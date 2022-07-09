import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './components/Context/ProductsContext';
import { Global } from '@emotion/react';
import { global, reset } from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <Global styles={reset} />
        <Global styles={global} />
        <App />
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);