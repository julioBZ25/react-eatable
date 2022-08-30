import React from 'react';
import { Route, Routes } from "react-router-dom";
import CategoriesDashboard from './components/Categories-Dashboard/CategoriesDashboard';
import CreateProduct from './components/Create-Product/CreateProduct';
import EditProduct from './components/Edit-Product/EditProduct';
import ProductsDashboard from './components/Products-Dashboard/ProductsDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CategoriesDashboard/>} />
        <Route path="/categories/:category" element={<ProductsDashboard />} />
        <Route path="/create" element={<CreateProduct/>} />
        <Route path="/product/edit/:id" element={<EditProduct/>} />
      </Routes>
    </>
  );
}

export default App;
