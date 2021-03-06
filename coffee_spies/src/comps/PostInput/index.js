import React from 'react'; 
import styled from 'styled-components'; 

const Input = styled.input`
    min-width: 320px; 
    min-height: 40px; 
    border: 1px solid #EDEDED;
    background-color: #EDEDED;  
    border-radius: 10px; 
`; 

const PostInput = () => {
    return <Input />
}

PostInput.defaultProps = {

}

export default PostInput;