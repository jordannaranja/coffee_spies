import React from 'react'; 
import styled from 'styled-components'; 

const Input = styled.input`
    min-width: 320px; 
    min-height: 90px; 
    border: 1px solid #EDEDED;
    background-color: #EDEDED;  
    border-radius: 10px; 
`; 

const PostDescInput = () => {
    return <Input />
}

PostDescInput.defaultProps = {

}

export default PostDescInput;