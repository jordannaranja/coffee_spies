import './App.scss';
import Main from '../src/pages/Main';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Setting from '../src/pages/Setting';
import CreatePost from '../src/pages/CreatePost';
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
