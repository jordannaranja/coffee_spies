import React from 'react'; 
import styled from 'styled-components'; 

const Button = styled.button`
    min-width: 253px; 
    min-height: 50px; 
    background-color: #107200;
    border: 1px solid #107200; 
    border-radius: 10px; 
    color: #FFFFFF;
    font-weight: bold; 
    margin-top: 100%;
    margin-right: 20px;  
`; 

const CreatePostButton = () => {
    return <Button>Create Post</Button>
}

CreatePostButton.defaultProps = {

}

export default CreatePostButton;