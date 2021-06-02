import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import React, {useState, useCallback} from 'react'
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces'
import UpdatePlace from '../src/places/pages/UpdatePlace'
import Login from './user/pages/Login';
import {LoginContext} from './shared/context/login-context'
import BottomNavigation from './shared/components/Navigation/TabNavigator/BottomNavigation';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, []);

  let routes;

  if(isLoggedIn){
    routes = (
      <Switch>
      <Route path="/" exact>
      <Users />
    </Route>
    <Route path="/:userId/places" exact>
    <UserPlaces />
  </Route>
    <Route path="/places/new" exact>
      <NewPlace />
      </Route>
      <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
    <Redirect to="/"></Redirect>
      </Switch>
    );

  }else {
    routes=(
      <Switch>

      
    <Route path="/:userId/places" exact>
    <UserPlaces />
  </Route>
  <Route path="/pages/Login" >
      <Login />
    </Route>
    <Redirect to="/pages/Login"></Redirect>
      </Switch>
    )
  }
  return (
    <LoginContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
  <Router>
    <MainNavigation />
    
    <main>
    {routes}
    </main>
    
    
  </Router>

    </LoginContext.Provider>
    
    

  ) ;

    
}

export default App;
