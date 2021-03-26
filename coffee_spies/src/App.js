import React, { useState, useEffect } from "react";
import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import jwtDecode from "jwt-decode";
import useLocalStorage from "react-use-localstorage";

import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register';
import CreatePost from './pages/createpost';
import Setting from './pages/setting';

function App() {

  const [token, setToken] = useLocalStorage("token");
  const [user, setUser] = useState();

  useEffect(() => {
    const user = token ? jwtDecode(token) : null;
    setUser(user);
  }, [token]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Main">
            <Main />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>          
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
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
