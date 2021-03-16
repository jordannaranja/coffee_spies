import './App.scss';
import { Link } from "react-router-dom";
import Main from 'pages/Main';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Setting from 'pages/Setting';
import CreatePost from 'pages/CreatePost';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Main">
            <Main />
          </Route>          
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/CreatePost">
            <CreatePost />
          </Route>
          <Route exact path="/Setting">
            <Setting />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
