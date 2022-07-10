import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createDish, deleteDish, editDish, searchDishes } from '../Api-Fetch/ApiFetch'

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
    const newDishes = dishes
    const index = dishes.findIndex( dish => dish.id === +id);
    newDishes.splice(index, 1)
    editDish(`products/${id}`, values).then((data) => {
      setDishes([...newDishes, data])
      navigate(`/categories/${data.category}`)
    }).catch((error) => setErrors(error))
  }

  function deleteProductDish(id){
    deleteDish(`products/${id.toString()}`).then(() => {
      setDishes(dishes.filter(dish => dish.id !== id))
      // navigate(`/categories/${category}`)
    })
  }

  const value = {
    dishes,
    createProductDish,
    editProductDish,
    deleteProductDish,
    errors,
  }

  return <ProductsContext.Provider value={value} {...props}/>
}

function useProducts(){
  return React.useContext(ProductsContext)
}

export {ProductsProvider, useProducts}

