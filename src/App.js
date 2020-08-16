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
    // Data for content
    const [blogs, setBlogs] = useState([])
    const [videos, setVideos] = useState([])
    const [products, setProducts] = useState([])
    // For login
    const [admin, setAdmin] = useState({})
    const [loginFormOn, setLoginFormOn] = useState(false)
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    // For forms
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")
    const [author, setAuthor] = useState("")
    const [trip, setTrip] = useState("")
    const [url, setUrl] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [discount, setDiscount] = useState(1)

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
    let getProducts = async () => {
      fetch(baseUrl + "/v1/product").then(res => {
        return res.json();
      }).then(data => {
        setProducts(data.data)
      }).catch(err => console.log(err))
    }
    getBlogs()
    getVideos()
    getProducts()
  }, [])
  
  let toggleLoginForm = () => {
    setLoginFormOn(!loginFormOn)
  }

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

  let handleSubmit = (event, type) => {
    event.preventDefault()
    if (type === "blog") {
      fetch(baseUrl + "/v1/" + type, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          text: text,
          image: image,
          date: date,
          author: author,
          trip: trip,
          last_admin: admin.id
        })
      }).then(res => {
        return res.json()
      }).then(data => {
        let copyBlogs = [...blogs]
        copyBlogs.push(data)
        setBlogs(copyBlogs)
        setTitle("")
        setText("")
        setImage("")
        setDate("")
        setAuthor("")
        setTrip("")
      })
    } else if (type === "video") {
      fetch(baseUrl + "/v1/" + type, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          text: text,
          url: url,
          date: date,
          thumbnail: thumbnail,
          trip: trip,
          last_admin: admin.id
        })
      }).then(res => {
        return res.json()
      }).then(data => {
        let copyVideos = [...videos]
        copyVideos.push(data)
        setVideos(copyVideos)
        setTitle("")
        setText("")
        setUrl("")
        setDate("")
        setThumbnail("")
        setTrip("")
      })
    } else if (type === "product") {
      fetch(baseUrl + "/v1/" + type, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          description: description,
          image: image,
          price: price,
          quantity: quantity,
          discount: discount,
          trip: trip,
          last_admin: admin.id
        })
      }).then(res => {
        return res.json()
      }).then(data => {
        let copyProducts = [...products]
        copyProducts.push(data)
        setProducts(copyProducts)
        setName("")
        setDescription("")
        setImage("")
        setQuantity(0)
        setPrice(0)
        setDiscount(1)
        setTrip("")
      })
    }
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
            <Home 
              videos={videos}
              blogs={blogs}
            />
          </Route>
          <Route path="/admincms">
            {admin.username ? (
              <AdminCms 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                title={title}
                text={text}
                image={image}
                date={date}
                author={author}
                trip={trip}
                url={url}
                thumbnail={thumbnail}
                name={name}
                description={description}
                price={price}
                quantity={quantity}
                discount={discount}
                setTitle={setTitle}
                setText={setText}
                setImage={setImage}
                setDate={setDate}
                setAuthor={setAuthor}
                setTrip={setTrip}
                setUrl={setUrl}
                setThumbnail={setThumbnail}
                setName={setName}
                setDescription={setDescription}
                setPrice={setPrice}
                setQuantity={setQuantity}
                setDiscount={setDiscount}
              />
            ) : <p>You need to log in for this feature.</p>}
          </Route>
        </Switch>
        <footer>
          {admin.username ? (
            <a href="/user/logout">Logout {admin.username}</a>
          ) : (
            loginFormOn ? (
              <form onSubmit={(event => handleLogin(event))}>
                <label htmlFor="email">Email
                  <input type="email" name="email" id="email" value={loginEmail} onChange={(event) => handleChange(event, setLoginEmail)}/>
                </label>
                <label htmlFor="password">Password
                  <input type="password" name="password" id="password" value={loginPassword} onChange={(event) => handleChange(event, setLoginPassword)}/>
                </label>
                <input type="submit" value="Login" />
                <button onClick={() => toggleLoginForm()}>Cancel</button>
              </form>
            ) : (
              <p id="admin-login" onClick={() => toggleLoginForm()}>Admin Login</p>
            )
          )}
        </footer>
      </div>
    </Router>
  );
}