import React from 'react'; 
import styled from 'styled-components'; 

const Button = styled.button`
    min-width: 320px; 
    min-height: 50px; 
    background-color: #107200;
    border: 1px solid #107200; 
    border-radius: 10px; 
    color: #FFFFFF;
    margin-top: 20px;
`; 

const LoginButton = ({text}) => {
    return <Button><h3>{text}</h3></Button>
}

LoginButton.defaultProps = {
text: null
}

export default LoginButton;