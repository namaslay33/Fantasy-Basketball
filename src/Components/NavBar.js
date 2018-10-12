import React, { Component } from 'react';
import {Navbar} from "react-bootstrap";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

import Home from './Home';
import Rules from './LeagueRules';
import MyTeam from './MyTeam';
import MatchUp from './MatchUp';
import Players from './Players';

class NavBar extends Component {

    render() {
      return (
        <BrowserRouter>
        <div>
          <br/>
          <Navbar inverse collapseOnSelect fluid>
            <Navbar.Brand>
              <img width={80} height={100} src={require('../Image/NBA-fantasy.ico')} alt="Logo" />
            </Navbar.Brand>
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
                <Link to="">Standings</Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <img width={60} height={90} src={require('../Image/Account.png')} alt="Account Icon" />
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