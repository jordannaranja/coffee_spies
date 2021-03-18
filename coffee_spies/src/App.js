import './App.scss';

import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register';
import Setting from './pages/setting';
import CreatePost from './pages/createpost';
import { Link } from "react-router-dom";

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
          <Route exact path="/main">
            <Main />
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
