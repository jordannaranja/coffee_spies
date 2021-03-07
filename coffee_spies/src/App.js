import './App.scss';
import EmailInput from '../src/comps/EmailInput'; 
import LoginButton from '../src/comps/LoginButton';
import PostInput from '../src/comps/PostInput'; 
import PostDescInput from '../src/comps/PostDescInput';
import CreatePostButton from '../src/comps/CreatePostButton';  
import Cancel from '../src/comps/Cancel';
import ProfileSelect from './comps/ProfileSelect';
import ProfileUpload from './comps/ProfileUpload';
import RegisterNowButton from './comps/RegisterNowButton';
import DropdownMenu from './comps/DropdownMenu';
import FeedPost from './comps/FeedPost';

function App() {
  return (
    // <EmailInput />
    // <LoginButton />
    // <PostInput /> 
    // <PostDescInput /> 
    // <CreatePostButton />
    // <Cancel />
    // <ProfileSelect />
    //<ProfileUpload />
    <div>
    <RegisterNowButton text="Register Now"/>
    <RegisterNowButton text="Log In"/>
    <DropdownMenu />
    <FeedPost title="Title" desc="Short description..." like="9" comment="2"/>
    </div>
  );
}

export default App;
