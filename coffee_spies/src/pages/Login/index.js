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
import {Add, Cancel, CreatePostButton, EmailInput, PostInput, PostDescInput, ProfileSelect, ProfileUpload, LoginButton} from '../../comps';

const Container = styled.div`
  display:flex;
  align-item:center;
  justify-content:center;
  flex-direction:column;
  width: 375px;
  height:100vh;


.subHeader{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin-bottom:29px;
  text-align: center;
  color: #000000;
}
.header{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #000000;
}
`;

const Login = () => {

  const history = useHistory();
  const [un, setUn] = useState("");
  const [pw, setPw] = useState("");

  const [error, setError] = useState(null);
  
    return <Container>

      <img src={Logo} />
      <div className="header"> Welcome Back!
      </div>

      <EmailInput type="text" placeholder="Email" onChange={(e)=>setUn(e.target.value)} />
      <EmailInput type="password" placeholder="Password" onChange={(e)=>setPw(e.target.value)} />
      <LoginButton value="Submit" text="Sign In" />
    </Container>
}

export default Login;