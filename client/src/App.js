import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Logout from './Components/Logout'
import "./App.css";
import Fundraise from './Components/Fundraise'
import Donation from './Components/Donation'
import ErrorPage from './Components/ErrorPage'
import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/ContactUs">
          <Contact />
        </Route>
        <Route path="/fundraise">
          <Fundraise />
        </Route>
        <Route path="/donation">
          <Donation />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/signup">
          <Login state="sign-up-mode" />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  )
}

export default App