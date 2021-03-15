import React from 'react'; 
import styled from 'styled-components'; 
import LogoSrc from '../../images/coffee-spies-logo.png'
import ProfileSrc from '../../images/profileimage.png'

const HeaderCont = styled.div`
    max-width: 375px;
    min-height: 130px; 
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`; 

const Logo = styled.img`
    max-width: 232px;
    max-height: 49px; 
`; 

const ProfileImg = styled.img`
    max-width: 70px; 
    max-height: 70px; 
    margin-left: 12%; 
`; 

const Header = () => {
    return <HeaderCont>
        <Logo src={LogoSrc}/>
        <ProfileImg src={ProfileSrc}/>
    </HeaderCont>
}

Header.defaultProps = {

}

export default Header; 