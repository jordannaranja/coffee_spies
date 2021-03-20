import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Button = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50px; 
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border: none;
`; 

const Cancel = ({onClick, text}) => {
  return <Link to={onClick}>
      <Button>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 1.49998L16.5 16.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5 1.49998L1.50001 16.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      </Button>
      </Link>
}

Cancel.defaultProps = {
  text: "x",
  onClick: "/"
}

export default Cancel;