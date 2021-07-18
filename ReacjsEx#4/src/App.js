import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/home";
import Post from "./components/post";
import Login from "./components/login";
import Profile from "./components/profile";
import PostDetail from "./components/postdetail";
const mystyle = {
  paddingLeft: "30px",
  textdecoration: "none",
  display: "inline",
};
const App=()=> {
  return (
    <Router>
      <div >
        
        <nav >

          <ul >
            <li  style={mystyle} >
              <Link to="/home">Home</Link>
            </li>
            <li style={mystyle} >
              <Link to="/posts">Post</Link>
            </li>

            <li style={mystyle} >
              <Link to="/profile">Profile</Link>
            </li>

            <li style={mystyle} >
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>
          <Route path="/posts">
            <Post />
          </Route>
          <Route path="/post/:id">
              <PostDetail />
              </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}


export default App;