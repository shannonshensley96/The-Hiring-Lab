import React, {useState, useEffect} from 'react';
import { Redirect ,Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePAge';
import MyProfile from '../MyProfile/MyProfile';
import userService from '../../utils/userService';


function App() {
  function handleSignUpOrLogin(){
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

  return (
    <div className="App">
        <Switch>
              <Route exact path="/">
                  <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
              </Route>
              <Route exact path="/signup">
                <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
              </Route>
              <Route exact path="/:username">
                  <MyProfile user={user} handleLogout={handleLogout}/>
              </Route>
         </Switch>
    </div> 
  );
}

export default App;