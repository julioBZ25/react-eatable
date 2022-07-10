import styled from '@emotion/styled'
import React from 'react'
import ModalButton from '../Button/ModalButton'
import { useProducts } from '../Context/ProductsContext';

const DeleteModal = ({ setDeleteModal, deleteModal, dish }) => {
  const { deleteProductDish } = useProducts();

  const OverlayModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const ModalContainer = styled.div`
    width: 500px;
    min-height: 218px;
    background: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  `
  return (
    <>
    { deleteModal && 
      (<OverlayModal>
        <ModalContainer>
          <h1>Are you sure?</h1>
          <ModalButton 
            handleClick={async () => {
              await deleteProductDish(dish.id)
              setDeleteModal(!deleteModal)
            }} 
            color={'#FA4A0C'}
          >
            Yes, delete it!
          </ModalButton>
          <ModalButton handleClick={() => setDeleteModal(!deleteModal)} color={'#EFB60E'}>No, cancel!</ModalButton>
        </ModalContainer>
      </OverlayModal>)
    }
      
    </>
  )
}

export default DeleteModal