import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Auth from './Auth'


export class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home1">
            <Home />
          </Route>
          
          <Route path="/">
            <Auth />
          </Route>
       
        </Switch>
      </Router>
    )
  }
}

export default App