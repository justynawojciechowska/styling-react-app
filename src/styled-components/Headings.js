import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  display: inline-block;
  font-size: 2em;
  font-weight: normal;
  margin: 20px 0 40px;
  text-align: center;
  position: relative;
  
  &:after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 5px;
    background: var(--green);
  }
`;

export default StyledHeader;
