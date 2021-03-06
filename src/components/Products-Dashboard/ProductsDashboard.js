import styled from '@emotion/styled';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { typography } from '../../styles/typography';
import Button from '../Button/Button';
import { useProducts } from '../Context/ProductsContext';
import { RiEditBoxFill, RiDeleteBinFill} from "react-icons/ri";
import DeleteModal from '../Modal/DeleteModal';
import { createPortal } from 'react-dom';

const customStylesIcon = {width: '0.9rem', height: '0.9rem', color: '#FA4A0C', cursor: 'pointer'};

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
  gap: 0.25rem;
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
  bottom: 25px;
  right: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
`
const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const ProductsDashboard = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [dish, setDish] = useState({})
  const { category } = useParams();
  const { dishes } = useProducts();
  const navigate = useNavigate();

  const products = dishes.filter( (dish) => dish.category === category );

  const handleCreate = () => {
    navigate('/create')
  }

  const handleClick = (product, action) => {
    switch (action) {
      case 'edit':
        navigate(`/product/edit/${product.id.toString()}`);
        break;
      case 'delete':
        setDeleteModal(!deleteModal);
        setDish(product);
        break;
      default:
        break;
    }
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
            <IconWrapper>
              <RiEditBoxFill style={customStylesIcon}  onClick={() => handleClick(product, 'edit')}/>
              <RiDeleteBinFill style={customStylesIcon} onClick={() => handleClick(product, 'delete')}/>
            </IconWrapper>
          </ProductCard>
        ))}
      </ProductContainer>
      <ProductFooter>
        <Button handleClick={handleCreate} colorbuttom={'orange'} sizebuttom={'default'}>Create Product</Button>
      </ProductFooter>
      {createPortal(
          <DeleteModal
            setDeleteModal={setDeleteModal}
            deleteModal={deleteModal}
            dish={dish}
          >
            
          </DeleteModal>, document.getElementById("modal-root")
        )}
    </ContainerPage>
  )
}

export default ProductsDashboard