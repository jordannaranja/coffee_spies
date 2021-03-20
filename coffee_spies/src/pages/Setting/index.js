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
import {Add, Cancel, CreatePostButton, EmailInput, PostInput, FeedPost, Header, PostDescInput, ProfileSelect, ProfileUpload, LoginButton, RegisterNowButton} from '../../comps';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`; 

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: 320px;
  text-align: left;
  margin: 20px;
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
        <UploadImg>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.75 10.2464L16 4.99637L21.25 10.2464" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 19V5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M28 17V26C28 26.2652 27.8946 26.5196 27.7071 26.7071C27.5196 26.8946 27.2652 27 27 27H5C4.73478 27 4.48043 26.8946 4.29289 26.7071C4.10536 26.5196 4 26.2652 4 26V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </UploadImg>
        <h2>Username</h2>
        <EmailInput bgcolor="#EDEDED" type="text" placeholder="Username"/>
        <h2>Email</h2>
        <EmailInput bgcolor="#EDEDED" type="text" placeholder="Email"/>
        <h2>Password</h2>
        <EmailInput bgcolor="#EDEDED" type="password" placeholder="Password"/>
        <LoginButton value="Submit" text="Save" />
      </Cont>
    </Container>
}

export default Setting;