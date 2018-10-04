import React, { Component } from 'react';
// import {BrowserRouter} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import '../CSS/home.css';
import '../CSS/rules.css'

class LeagueRules extends Component {
  render() {
    return (
      <div>
        <div className="Background">
            <h1>League Rules</h1>

            <br/><br />
            {/* <Grid>
              <Row className="show-grid">
              <Col md={2}></Col>
              <Col md={4}> */}
                <ul>
                <li>There are 5 categories for scoring: </li>
                  <ul>
                    <li>Points = 1</li>
                    <li>Rebounds = 1.2</li>
                    <li>Assists = 1.5</li>
                    <li>Steals = 3</li>
                    <li>Blocks = 3</li>
                    <li>Turnovers = -1</li>
                  </ul>
                <li>Scores will be tallied on a weekly basis. Team with the most points by the end of the week wins</li>
                <li>Champion is the team with the best record and highest season point total</li>
                <li>Max Roster size will be 5 players</li>
              </ul>
              {/* </Col>
              </Row>
            </Grid> */}
        </div>
      </div>
    );
  }
}

export default LeagueRules;