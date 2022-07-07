import React, { useEffect, useState } from 'react'
import searchDishes from '../Api-Fetch/ApiFetch';

const ProductsContext = React.createContext()

function ProductsProvider(props){
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    searchDishes('products').then(data => {
      setDishes(data);
    });
  }, [])

  const value = {
    dishes
  }

  return <ProductsContext.Provider value={value} {...props}/>
}

function useProducts(){
  return React.useContext(ProductsContext)
}

export {ProductsProvider, useProducts}

