import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Videos from "./components/Videos"
import Blog from "./components/Blog"
import Shop from "./components/Shop"
import Contact from "./components/Contact"
import AdminCms from "./components/AdminCms"

//To set baseUrl to work with Heroku or localhost
let baseUrl;
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8000';
} else {
  baseUrl = 'https://ride-along-backend.herokuapp.com';
}
// console.log('current base URL:', baseUrl);

export default function App() {
  // State
  const [blogs, setBlogs] = useState([])
  const [videos, setVideos] = useState([])
  const [admin, setAdmin] = useState({})
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  // Functions to make everything work
  useEffect(() => {
    let getBlogs = async () => {
      fetch(baseUrl + "/v1/blog").then(res => {
        return res.json();
      }).then(data => {
        setBlogs(data.data)
      }).catch(err => console.log(err))
    }
    let getVideos = async () => {
      fetch(baseUrl + "/v1/video").then(res => {
        return res.json();
      }).then(data => {
        setVideos(data.data)
      }).catch(err => console.log(err))
    }
    getBlogs()
    getVideos()
  }, [])
  
  let handleChange = (event, callback) => {
    callback(event.target.value)
  }

  let handleLogin = (event) => {
    event.preventDefault()
    fetch(baseUrl + "/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword
      })
    }).then(res => {
      return res.json()
    }).then(data => {
      setAdmin(data.data)
      setLoginEmail("")
      setLoginPassword("")
    })
  }

  // Render
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {admin.username ? (
              <li>
              <Link to="/admincms">Add New Content</Link>
            </li>
            ) : ""}
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog blogs={blogs}/>
          </Route>
          <Route path="/videos">
            <Videos videos={videos}/>
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admincms">
            <AdminCms />
          </Route>
        </Switch>
        <footer>
          {admin.username ? (
            <a href="/user/logout">Logout {admin.username}</a>
          ) : (
            <form onSubmit={(event => handleLogin(event))}>
              <label htmlFor="email">Email
                <input type="email" name="email" id="email" value={loginEmail} onChange={(event) => handleChange(event, setLoginEmail)}/>
              </label>
              <label htmlFor="password">Password
                <input type="password" name="password" id="password" value={loginPassword} onChange={(event) => handleChange(event, setLoginPassword)}/>
              </label>
              <input type="submit" value="Login" />
            </form>
          )}
        </footer>
      </div>
    </Router>
  );
}