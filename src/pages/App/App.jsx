import React, {useState, useEffect} from 'react';
import { Redirect ,Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import MyProfile from '../MyProfile/MyProfile';
import userService from '../../utils/userService';


function App() {

  
  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

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