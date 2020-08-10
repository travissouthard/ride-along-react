import React, { useState } from "react";
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

export default function App() {
  const blogs = useState([])
  const videos = useState([])
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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
          <Route>
            <AdminCms />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}