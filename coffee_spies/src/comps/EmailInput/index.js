import React from 'react'; 
import styled from 'styled-components'; 

const Input = styled.input`
    min-width: 320px; 
    min-height: 40px; 
    border: 1px solid #FFFFFF; 
    border-radius: 10px; 
`; 

const EmailInput = () => {
    return <Input />
}

EmailInput.defaultProps = {

}

export default EmailInput;