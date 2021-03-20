import React from 'react'; 
import styled from 'styled-components'; 

const Input = styled.input`
    min-width: 320px; 
    min-height: 40px; 
    border: 1px solid #FFFFFF; 
    border-radius: 10px; 
    ${props=>props.bgcolor && "background-color:"+props.bgcolor+";"}
`; 

const EmailInput = ({bgcolor}) => {
    return <Input bgcolor={bgcolor}/>
}

EmailInput.defaultProps = {
bgcolor: null
}

export default EmailInput;