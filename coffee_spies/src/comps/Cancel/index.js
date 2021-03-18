import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Button = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50px; 
  align-item:center;
  font-size: 27pt;
  margin-top: 87%; 
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`; 

const Cancel = ({onClick, text}) => {
  return <Link to={onClick}>
      <Button>{text}</Button>
      </Link>
}

Cancel.defaultProps = {
  text: "x",
  onClick: "/"
}

export default Cancel;