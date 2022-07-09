import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createDish, editDish, searchDishes } from '../Api-Fetch/ApiFetch'

const ProductsContext = React.createContext()

function ProductsProvider(props){
  const [dishes, setDishes] = useState([])
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    searchDishes('products').then(data => {
      setDishes(data);
    });
  }, [])

  function createProductDish(values){
    createDish('products', values).then((data) => {
      setDishes([...dishes, data])
      navigate(`/categories/${data.category}`)
    }).catch((error) => setErrors(error))
  }

  function editProductDish(id, values){
    editDish(`products/${id}`, values).then((data) => {
      setDishes([...dishes, data])
      navigate(`/categories/${data.category}`)
    }).catch((error) => setErrors(error))
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

