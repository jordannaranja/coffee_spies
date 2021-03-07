import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 160px;
min-height: 90px;
max-width: 160px;
max-height: 90px;
box-shadow: 0 0 10px #D6D6D6;
border-radius: 10px;
div {
    cursor: pointer;
}
div:first-child {
    :hover {
        color: #107200;
    }
}
`;

const LogOut = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
position: relative;
bottom: -10px;
background-color: #9E9E9E;
min-width: 140px;
min-height: 30px;
max-width: 140px;
max-height: 30px;
border-radius: 5px;
color: white;
div {
    margin-left: 5px;
}
:hover {
    background-color: #bfbfbf;
}
`;

const DropdownMenu = () => {
    return <Container>
        <div>Settings</div>
        <LogOut> 
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5566 5.71094L14.3457 8.5L11.5566 11.2891" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.90625 8.5H14.3438" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.96875 14.3438H3.1875C3.0466 14.3438 2.91148 14.2878 2.81185 14.1882C2.71222 14.0885 2.65625 13.9534 2.65625 13.8125V3.1875C2.65625 3.0466 2.71222 2.91148 2.81185 2.81185C2.91148 2.71222 3.0466 2.65625 3.1875 2.65625H7.96875" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div>Log Out</div>
        </LogOut>
    </Container>
}

DropdownMenu.defaultProps = {

}

export default DropdownMenu;