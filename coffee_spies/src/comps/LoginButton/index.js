import React from 'react'; 
import styled from 'styled-components'; 

const Button = styled.button`
    min-width: 320px; 
    min-height: 50px; 
    background-color: #107200;
    border: 1px solid #107200; 
    border-radius: 10px; 
    color: #FFFFFF;
    font-weight: bold; 
`; 

const LoginButton = () => {
    return <Button>Log In</Button>
}

LoginButton.defaultProps = {

}

export default LoginButton;