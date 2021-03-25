import './App.scss';import { Link } from "react-router-dom";

import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register';
import CreatePost from './pages/createpost';
import Setting from './pages/setting';

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
            <Main />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>          
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/createpost">
            <CreatePost />
          </Route>
          <Route exact path="/setting">
            <Setting />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
