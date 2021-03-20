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
  width: 350px;
  `;

  const LogIn = styled.div`
  margin-top: 50px;
  `;

const Login = () => {

  const history = useHistory();
  const [un, setUn] = useState("");
  const [pw, setPw] = useState("");

  const [error, setError] = useState(null);
  
    return <Container>
      <CSLogo src={Logo} />
      <Cont>
        <div className="header"><h1> Welcome Back!</h1></div>
        <h2>Email</h2>
        <EmailInput type="text" placeholder="Email" onChange={(e)=>setUn(e.target.value)} />
        <h2>Password</h2>
        <EmailInput type="password" placeholder="Password" onChange={(e)=>setPw(e.target.value)} />
        <Link to={"/main"}><LoginButton value="Submit" text="Sign In" /></Link>
      </Cont>
      <LogIn>
        <Link to={"/register"}><RegisterNowButton text="Register Now"/></Link>
      </LogIn>
    </Container>
}

export default Login;