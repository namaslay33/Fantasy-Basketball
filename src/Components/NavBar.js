import React, { Component } from 'react';
import {Navbar} from "react-bootstrap";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

import Home from './Home';
import Rules from './Rules';
import MyTeam from './MyTeam';
import MatchUp from './MatchUp';
import Players from './Players';

class NavBar extends Component {

    render() {
      return (
        <BrowserRouter>
        <div>
          Test
          <Navbar inverse collapseOnSelect fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Home</Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link to="/Rules">Rules</Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link to="/MyTeam">MyTeam</Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link to="/MatchUp">MatchUp</Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link to="/Players">Players</Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <img src=""alt="" />
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>

        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Rules" component={Rules}/>
          <Route exact path="/MyTeam" component={MyTeam}/>
          <Route exact path="/MatchUp" component={MatchUp}/>
          <Route exact path="/Players" component={Players}/>
        </Switch>
        </div>
        </ BrowserRouter>
        
    );
  }
}

export default NavBar;