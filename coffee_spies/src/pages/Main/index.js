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

const Container = styled.div`
  display:flex;
  align-item:center;
  justify-content:center;
  flex-direction:column;
  width: 375px;
.scrollview {
  margin-left:30px;
}
`; 

const Main = () => {
    return <Container>

      <Header />
      <div className="scrollview">
       <FeedPost />
       <FeedPost />
      </div>
    </Container>
}

export default Main;