import React from 'react'; 
import styled from 'styled-components'; 
import Header from '../../comps/Header'; 
import PostInput from '../../comps/PostInput'; 
import PostDescInput from '../../comps/PostDescInput'; 
import ProfileUpload from '../../comps/ProfileUpload'; 
import CreatePostButton from '../../comps/CreatePostButton';
import Cancel from '../../comps/Cancel'; 

const PageCont = styled.div``; 

const InputCont = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
`; 

const PostCont = styled.div`
  margin-right: 13%; 
  margin-top: 15%; 
`;

const AddTitle = styled.p`
  font-size: 12px;
  margin: 5% 70% -10% 0%; 
`; 

const AddDesc = styled.p`
  font-size: 12px; 
  margin 5% 60% -10% 0%;
`; 

const CreatePost = () => {
    return <PageCont>
      <Header />

      <InputCont>
        <AddTitle>Add a Title</AddTitle>
        <PostInput />
        <AddDesc>Add a Description</AddDesc>
        <PostDescInput />
        <ProfileUpload />
      </InputCont>

      <PostCont>
        <CreatePostButton />
        <Cancel />
      </PostCont>

    </PageCont>
}

export default CreatePost;