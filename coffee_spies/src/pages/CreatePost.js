import React from 'react'; 
import styled from 'styled-components'; 

const Button = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50px; 
  align-item:center;
  font-size: 27pt;

  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  transform: rotate(45deg);
`; 

const CreatePost = () => {
    return <Button>+</Button>
}

export default CreatePost;