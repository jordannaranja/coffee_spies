import React from 'react'; 
import styled from 'styled-components'; 

const Button = styled.button`
    min-width: 253px; 
    min-height: 50px; 
    background-color: #107200;
    border: 1px solid #107200; 
    border-radius: 10px; 
    color: #FFFFFF;
`; 

const CreatePostButton = () => {
    return <Button><h3>Create Post</h3></Button>
}

CreatePostButton.defaultProps = {

}

export default CreatePostButton;