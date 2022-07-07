import styled from '@emotion/styled'
import React from 'react'

const Button = ({children, handleClick}) => {
  const Button = styled.button`
    background-color: #FA4A0C;
    width: 310px;
    height: 70px;
    border-radius: 30px;
    border: none;
    color: white;
    cursor: pointer;
  `
  return (
    <Button onClick={handleClick}>
      {children}
    </Button>
  )
}

export default Button