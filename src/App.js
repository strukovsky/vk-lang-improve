import React, { Component } from 'react';

import './App.css';
import '@vkontakte/vkui/dist/vkui.css'
import Main from "./components/Main";
import Hello from "./components/Hello";
import {Router, Route, Switch, withRouter, Redirect} from "react-router-dom";
import {createBrowserHistory} from 'history'
import Cookie from "./cookie/Cookie";
class App extends Component {
  constructor(props) {
    super(props);
  }



  render() {
      let routes = (
          <Switch>
              <Route history={history} exact path='/main'>
                  <Main/>
              </Route>
              <Route history={history} path='/hello' >
                  <Hello/>
              </Route>
              <Redirect to="/main"/>

          </Switch>
      );
      if(!Cookie.isAuth())
          routes = (
              <Switch>
                  <Route history={history} exact path='/main'>
                      <Main/>
                  </Route>
                  <Route history={history} path='/hello' >
                      <Hello/>
                  </Route>
                    <Redirect to="/hello"/>
              </Switch>
          );


    return routes;
  }
}

export default withRouter(App);
