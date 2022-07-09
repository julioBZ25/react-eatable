import React from 'react';
import { Route, Routes } from "react-router-dom";
import CategoriesDashboard from './components/Categories-Dashboard/CategoriesDashboard';
import CreateProduct from './components/Create-Product/CreateProduct';
import ProductsDashboard from './components/Products-Dashboard/ProductsDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/categories" element={<CategoriesDashboard/>} />
        <Route path="/categories/:category" element={<ProductsDashboard />} />
        <Route path="/create" element={<CreateProduct/>} />
      </Routes>
    </>
  );
}

export default App;
