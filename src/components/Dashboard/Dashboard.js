import React, { useEffect, useState } from 'react'
import searchDishes from '../Api-Fetch/ApiFetch'


const Dashboard = () => {
  const [dishes, setDishes] = useState({})

  useEffect(() => {
    searchDishes('products')
                .then(data => setDishes(data))
  }, [])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard