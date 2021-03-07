import React from 'react';
import styled from 'styled-components'; 

const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 190px;
    min-height: 50px;
    max-width: 190px;
    max-height: 50px;
    background-color: white;
    box-shadow: 0 0 10px #D6D6D6;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .2s ease-in-out;
    :hover {
        transform: scale(1.1);
    }
`;

const Arrow = styled.div`
    position: relative;
    padding: 0 5px;
    bottom: -2px;
`;

const RegisterNowButton = ({text}) =>{
    return <Container>
        <p>or</p> &nbsp; <h4>{text}</h4>
        <Arrow>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4.5L16.5 12L9 19.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Arrow>
    </Container>
}

RegisterNowButton.defaultProps = {
    text: "",
}

export default RegisterNowButton;