import React from "react";
import SessionForm from './user_auth/session_form'
import SignInContainer from './user_auth/signin_form_container';
import SignUpContainer from './user_auth/signup_form_container';
import HelloContainer from './splash_page/home_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div>
    <HelloContainer />
    <Switch>
      <AuthRoute exact path="/login" component={SignInContainer}/>
      <AuthRoute exact path="/signup" component={SignUpContainer}/>
    </Switch>
  </div>
);

export default App;