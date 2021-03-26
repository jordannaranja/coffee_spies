import React, { useState, useEffect } from 'react';
import axios from "axios";

import { useParams, useHistory } from 'react-router-dom';

import styled from 'styled-components'; 
import Logo from '../../images/coffee-spies-logo.png';

//shortcut imports
import {Add, Cancel, CreatePostButton, EmailInput, PostInput, FeedPost, Header, PostDescInput, ProfileSelect, ProfileUpload, LoginButton} from '../../comps';


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

  const params = useParams();
  const history = useHistory();

  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [postlikes, setPostLikes] = useState("");

  const getData = async () => {
      const resp = await axios.get("https://petsave-backend.herokuapp.com/api/posts");
      console.log(resp.data.posts)

      var token = await localStorage.getItem("token")
      if(token){
          axios.defaults.headers.common['Authorization'] = token;
          setPosts([...resp.data.posts]);
      } else {
          history.push("/login");
      }

    return <Container>
      <Header />
      <Cont>
        <div className="scrollview">
          <FeedPost />
          <FeedPost />
        </div>
      </Cont>
    </Container>
}

}

export default Main;