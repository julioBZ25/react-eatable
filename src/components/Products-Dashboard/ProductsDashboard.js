import styled from '@emotion/styled';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { typography } from '../../styles/typography';
import Button from '../Button/Button';
import { useProducts } from '../Context/ProductsContext';

const ProductContainer = styled.div`
  padding: 0 29px;
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 1rem;
  row-gap: 30px;
  margin-bottom: 90px;
`

const ProductImageContainer = styled.div`
  width: 130px;
  height: 130px;
  & img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    position: relative;
    bottom: 8px;
  }
`
const ProductCard = styled.div`
  background-color: #FFFFFF;
  width: 156px;
  height: 200px;
  border-radius: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  box-shadow: 0px 30px 60px 0px rgba(57,57,57,0.09);
  -webkit-box-shadow: 0px 30px 60px 0px rgba(57,57,57,0.09);
  -moz-box-shadow: 0px 30px 60px 0px rgba(57,57,57,0.09);
  & p {
    margin: 0;
    ${typography.semibold['s']}
  }
`

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 25px;
  height: 100%;
  & h1 {
    margin: 0;
    ${typography.semibold['l']}
  }
`
export const ProductFooter = styled.footer`  
  position: fixed;
  bottom: 10px;
`

const ProductsDashboard = () => {
  const { category } = useParams();
  const { dishes } = useProducts();
  const navigate = useNavigate();

  const products = dishes.filter( (dish) => dish.category === category )

  const handleClick = () => {
    navigate('/create')
  }

  return (
    <ContainerPage>
      <h1>
        Products Dashboard
      </h1>
      <ProductContainer>
        {products.map( (product) => (
          <ProductCard key={product.id}>
            <ProductImageContainer>
              <img src={product.picture_url} alt="product" />
            </ProductImageContainer>
            <div>
              <p>{product.name}</p>
              <p style={{color: 'red'}}>${product.price}</p>
            </div>
          </ProductCard>
        ))}
      </ProductContainer>
      <ProductFooter>
        <Button handleClick={handleClick}>Create Product</Button>
      </ProductFooter>
    </ContainerPage>
  )
}

export default ProductsDashboard