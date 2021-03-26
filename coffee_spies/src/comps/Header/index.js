import React from 'react'; 
import styled from 'styled-components'; 
import LogoSrc from '../../images/coffee-spies-logo.png'
import ProfileSrc from '../../images/profileimage.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const HeaderCont = styled.div`
    position: fixed;
    top: 0;
    overflow: hidden;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 130px; 
    max-height: 130px; 
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    justify-content: space-between;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
`; 

const Logo = styled.img`
    max-width: 232px;
    max-height: 49px;
    margin: 10px; 
`; 

const ProfileImg = styled.img`
    max-width: 70px; 
    max-height: 70px;
    margin: 20px; 
`; 

const Header = () => {
    return <HeaderCont>
        <Logo src={LogoSrc}/>
        <Link to={"/setting"}>
            <ProfileImg src={ProfileSrc}/>
        </Link>
    </HeaderCont>
}

Header.defaultProps = {

}

export default Header; 