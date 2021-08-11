import React, {useState, useEffect} from 'react';
import { Redirect ,Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import MyProfile from '../MyProfile/MyProfile';
import userService from '../../utils/userService';


export default function App() {

  
  const [user, setUser] = useState(userService.getUser()) 

  function handleSignUpOrLogin(){
    setUser(userService.getUser()); 

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }
   
  return (
    <div className="App">
      <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {userService.getUser() ? 
            <> 
             <Switch>
                <Route exact path="/">
                    <HomePage user={user}  handleLogout={handleLogout} />
                </Route>
                <Route exact path="/:username">
                    <MyProfile user={user} handleLogout={handleLogout}/>
                </Route>
                  
             </Switch>
            </>
            :
            <Redirect to='/login'/>
          }
  
      </Switch>
    </div>
  );
}


}
