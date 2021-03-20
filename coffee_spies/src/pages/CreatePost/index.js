import React from 'react'; 
import styled from 'styled-components'; 
import Header from '../../comps/Header'; 
import PostInput from '../../comps/PostInput'; 
import PostDescInput from '../../comps/PostDescInput'; 
import ProfileUpload from '../../comps/ProfileUpload'; 
import CreatePostButton from '../../comps/CreatePostButton';
import Cancel from '../../comps/Cancel'; 

const PageCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  justify-content: center;
  align-items: center;
  min-width: 375px;
  max-width: 375px;
  `;

const InputCont = styled.div`
  display: flex; 
  flex-direction: column;
  text-align: left;
`; 

const PostCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 320px;
`;


const CreatePost = () => {
    return <PageCont>
      <Container>
        <Header />

        <InputCont>
          <h2>Add a Title</h2>
          <PostInput />
          <h2>Add a Description</h2>
          <PostDescInput />
          <h2>Add a Picture</h2>
          <ProfileUpload />
        </InputCont>

        <PostCont>
          <CreatePostButton />
          <Cancel />
        </PostCont>
      </Container>
    </PageCont>
}

export default CreatePost;