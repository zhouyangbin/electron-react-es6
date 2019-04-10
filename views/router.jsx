import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect,Router } from 'react-router-dom';

import index from './page/index/index';
import home from './page/home/home';
class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route exact path="/" component={index}/>
          <Route path="/home" component={home} />
        </Switch>
      </HashRouter>
    )
  }
}
export default RouteConfig;