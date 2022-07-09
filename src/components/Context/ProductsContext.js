import React, { useEffect, useState } from 'react'
import { createDish, searchDishes } from '../Api-Fetch/ApiFetch'

const ProductsContext = React.createContext()

function ProductsProvider(props){
  const [dishes, setDishes] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    searchDishes('products').then(data => {
      setDishes(data);
    });
  }, [])

  function createProductDish(values){
    createDish('products', values).then((data) => setDishes([...dishes, data])).catch((error) => setErrors(error))
  }

  const value = {
    dishes,
    createProductDish,
    errors,
  }

  return <ProductsContext.Provider value={value} {...props}/>
}

function useProducts(){
  return React.useContext(ProductsContext)
}

export {ProductsProvider, useProducts}

