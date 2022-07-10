import styled from '@emotion/styled'
import React from 'react'

const ModalButton = ({children, handleClick, ...props}) => {
  const ModalButton = styled.button`
    width: 262px;
    height: 47px;
    border-radius: 30px;
    border: none;
    color: white;
    cursor: pointer;
    ${props => ({backgroundColor: props.color})}
  `

  return (
    <ModalButton onClick={handleClick} {...props}>
      {children}
    </ModalButton>
  )
}

export default ModalButton