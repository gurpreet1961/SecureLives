import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Contact from './Components/Contact'
import Login from './Components/Login'
import "./App.css";
import Fundraise from './Components/Fundraise'
import Donation from './Components/Donation'
import "./App.css";
const App = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/fundraise">
        <Fundraise />
      </Route>
      <Route exact path="/donation">
        <Donation />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Login state="sign-up-mode" />
      </Route>
    </>
  )
}

export default App