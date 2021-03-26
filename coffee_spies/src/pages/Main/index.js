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

//shortcut imports
import {Add, Cancel, CreatePostButton, EmailInput, PostInput, FeedPost, Header, PostDescInput, ProfileSelect, ProfileUpload, LoginButton} from '../../comps';

const axios = require('axios').default;


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`; 

const Cont = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top: 150px;
  min-width: 375px;
  max-width: 375px;
  flex-direction: column;
`;

const Main = () => {
    return <Container>
      <Header />
      <Cont>
          <FeedPost />
          <FeedPost />
      </Cont>
    </Container>
}

export default Main;