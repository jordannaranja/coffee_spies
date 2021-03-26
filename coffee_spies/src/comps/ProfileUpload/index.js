import React, { useState } from 'react'; 
import axios from 'axios';
import styled from 'styled-components'; 

const Container = styled.div`
  min-width: 320px;
  height: 350px;   
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EDEDED;  
  border-radius: 15px;
`; 

const Button = styled.button`
  position: absolute;
  width: 72px;
  height: 72px;
  border: none;
  background: #C4C4C4;
  border-radius: 15px;
  cursor: pointer;
`;

const ProfileUpload = () => {

  const [file, setFile] = useState()
  const [image, setImage] = useState()

  const submit = async event => {
    event.preventDefault()
  
    const formData = new FormData()
    formData.append("image", file)
  

    const result = await axios.post('/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    setImage(result.data.imagePath)
  }


  

    return <Container onSubmit={submit}>

      <Button type="submit" filename={file} 
      onChange={e => setFile(e.target.files[0])} 
      type="file" 
      accept="image/*">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.75 10.2464L16 4.99637L21.25 10.2464" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 19V5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28 17V26C28 26.2652 27.8946 26.5196 27.7071 26.7071C27.5196 26.8946 27.2652 27 27 27H5C4.73478 27 4.48043 26.8946 4.29289 26.7071C4.10536 26.5196 4 26.2652 4 26V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
      </Button>

    </Container>

}

ProfileUpload.defaultProps = {

}

export default ProfileUpload;