import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import { typography } from '../../styles/typography'
import { useProducts } from '../Context/ProductsContext'
import { ContainerPage } from '../Products-Dashboard/ProductsDashboard'

const CategoriesList = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 2rem;
  & a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`

const CategoryCard = styled.li`
  background-color: white;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0px 30px 60px 0px rgba(57,57,57,0.09);
  -webkit-box-shadow: 0px 30px 60px 0px rgba(57,57,57,0.09);
  -moz-box-shadow: 0px 30px 60px 0px rgba(57,57,57,0.09);
  ${typography.regular['l']}
`

const CategoriesDashboard = () => {
  const { dishes } = useProducts();
  
  const categories = Array.from(new Set(dishes.map((dish) => dish.category)));

  return (
    <ContainerPage>
      <h1>
        Categories Dashboard
      </h1>
      <CategoriesList>
        {categories.map((category) => ( 
          <CategoryCard key={category}>
            <Link to={`/categories/${category}`}>{category}</Link>
          </CategoryCard>
        ))}
      </CategoriesList>
    </ContainerPage>
  )
}
export default CategoriesDashboard