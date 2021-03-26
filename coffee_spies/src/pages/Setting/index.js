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
import {Add, Cancel, CreatePostButton, EmailInput, PostInput, FeedPost, Header, PostDescInput, ProfileSelect, ProfileUpload, LoginButton, RegisterNowButton, } from '../../comps';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin-top: 150px;
`; 

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: 320px;
  text-align: left;
`;

const UploadImg = styled.button`
  width: 72px;
  height: 72px;
  border: none;
  background: #C4C4C4;
  border-radius: 15px;
  cursor: pointer;  
`;

const Setting = () => {

    return <Container>
      <Header />
      <Cont>
        <h1>Settings</h1>
        <h2>Profile Image</h2>
        <ProfileUpload  />
        <h2>Username</h2>
        <EmailInput bgcolor="#EDEDED" type="text" placeholder="Username"/>
        <h2>Email</h2>
        <EmailInput bgcolor="#EDEDED" type="text" placeholder="Email"/>
        <h2>Password</h2>
        <EmailInput bgcolor="#EDEDED" type="password" placeholder="Password"/>
        <Link to="/main"><LoginButton value="Submit" text="Save" /></Link>
      </Cont>
    </Container>
}

export default Setting;