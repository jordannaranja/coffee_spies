import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import styled from 'styled-components'; 
import Logo from '../../images/coffee-spies-logo.png';
import LoginImg from '../../images/login.jpg';

//shortcut imports
import {Add, Cancel, CreatePostButton, EmailInput, PostInput, PostDescInput, ProfileSelect, ProfileUpload, LoginButton, RegisterNowButton} from '../../comps';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 1)),
  url('${LoginImg}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .header {
    margin-bottom: 15px;
  }
`; 

const Cont = styled.div`
display:flex;
justify-content: left;
flex-direction: column;
text-align: left;
`;

const CSLogo = styled.img`
margin-bottom: 50px;
`;

const Reg = styled.div`
margin-top: 50px;
`;

const Register = () => {
    return <Container>
      <CSLogo src={Logo} />
      <Cont>
      <div className="header"><h1>Welcome to Coffee Spies!</h1></div>
        <h2>Username</h2>
        <EmailInput type="text" placeholder="Username"/>
        <h2>Email</h2>
        <EmailInput type="text" placeholder="Email"/>
        <h2>Password</h2>
        <EmailInput type="password" placeholder="Password"/>
        <h2>Confirm Password</h2>
        <EmailInput type="password" placeholder="Confirm Password"/>
        <LoginButton value="Submit" text="Register" />
      </Cont>
      <Reg>
      <Link to={"/"}><RegisterNowButton text="Log In"/></Link>
      </Reg>
    </Container>
}

export default Register;