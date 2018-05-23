import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: 2px solid ${props => props.buttonClicked ? 'var(--violet)': 'var(--green)'};
  color: ${props => props.buttonClicked ? 'var(--violet)' : 'var(--green)'};
  cursor: pointer;
  display: block;
  font-size: 1.2em;
  margin: 20px auto 50px;
  padding: 10px 50px;
  text-align: center;
  
  &:hover{
    background: var(--green);
    border: 2px solid var(--green);
    color: white;
    outline: none;
  }
  
   &:focus{
    outline: none;
  }
`;

export default Button;
