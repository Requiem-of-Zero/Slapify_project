import React from "react";
import SessionForm from './user_auth/session_form'
import SignInContainer from './user_auth/signin_form_container';
import SignUpContainer from './user_auth/signup_form_container';
import HelloContainer from './splash_page/homepage_container';
import MusicPlayerContainer from './music_player/music_player_container'
import NotFound from '../components/404screen/not_found'
import Header from './splash_page/logged_out/header'
import { AuthRoute } from '../util/route_util';
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
    {/* <Header /> */}
    <Switch>
      <Route exact path="/" component={HelloContainer}/>
      <AuthRoute exact path="/login" component={SignInContainer}/>
      <AuthRoute exact path="/signup" component={SignUpContainer}/>
      <Route path="/songs/:songId" component={MusicPlayerContainer}/>
      <NotFound />
    </Switch>
  </div>
);

export default App;