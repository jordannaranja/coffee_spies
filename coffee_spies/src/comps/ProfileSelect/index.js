import React from 'react'; 
import styled from 'styled-components'; 

const Container = styled.div`
  width: auto;
  height: 90px;
  align-items: center;
  background: url(Unsplash-Avatars_0004s_0015_ali-pazani-_AIaWSaSTVI-unsplash.jpg);
  border: 2px solid #66B700;
  box-sizing: border-box;
  border-radius: 10px;
`;

const Button = styled.button`
  position: absolute;
  width: 70px;
  height: 70px;

  background: url(Unsplash-Avatars_0004s_0015_ali-pazani-_AIaWSaSTVI-unsplash.jpg);
  border: 2px solid #66B700;
  box-sizing: border-box;
  border-radius: 10px;
`; 

const Button2 = styled.button`
  position: absolute;
  width: 70px;
  height: 70px;

  background: url(Unsplash-Avatars_0004s_0015_ali-pazani-_AIaWSaSTVI-unsplash.jpg);
  border-radius: 10px;
`; 

const ProfileSelect = () => {
    return 
    <Container>

      <Button></Button>
      <Button2></Button2>
    
    </Container>
}

ProfileSelect.defaultProps = {

}

export default ProfileSelect;