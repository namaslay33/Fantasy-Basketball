import React, { Component } from 'react';
// import {BrowserRouter} from 'react-router-dom';
import {Grid, Row, Col, ButtonToolbar, DropdownButton, MenuItem, Panel, ListGroup, ListGroupItem} from "react-bootstrap";
import '../CSS/matchup.css'

class MatchUp extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>MatchUp page... coming soon</h1> */}

        <Grid>
        <Row className="show-grid">
        <Col md={5}></Col>
        <Col md={4}>
        <ButtonToolbar>
          <DropdownButton title="Choose Week" id="dropdown-size-medium">
            <MenuItem eventKey="1">Week 1</MenuItem>
            <MenuItem eventKey="2">Week 2</MenuItem>
            <MenuItem eventKey="3">Week 3</MenuItem>
            {/* <MenuItem eventKey="4">Week 4</MenuItem>
            <MenuItem eventKey="4">Week 5</MenuItem> */}
          </DropdownButton>
        </ButtonToolbar>
        </Col>
        </Row>
        </Grid>

        <br/>

        <div className="container">
        <Grid>
          <Row className="show-grid">
          <Col xs={12} md={5}>
            <h4><strong>Home Team</strong></h4>
            Score:
            <div className="Home">
            <Panel>
                <ListGroup>
                  <ListGroupItem>Point Guard</ListGroupItem>
                  <ListGroupItem>Shooting Guard</ListGroupItem>
                  <ListGroupItem>Guard / Forward</ListGroupItem>
                  <ListGroupItem>Forward</ListGroupItem>
                  <ListGroupItem>Foward / Center</ListGroupItem>
                </ListGroup>
              </Panel>
            </div>
          </Col>
          <Col md={2}>vs</Col>
          <Col md={5}>  
            <h4><strong>Away Team</strong></h4>
            Score:
            <div className="Away">
            <Panel>
                <ListGroup>
                  <ListGroupItem>Point Guard</ListGroupItem>
                  <ListGroupItem>Shooting Guard</ListGroupItem>
                  <ListGroupItem>Guard / Forward</ListGroupItem>
                  <ListGroupItem>Forward</ListGroupItem>
                  <ListGroupItem>Foward / Center</ListGroupItem>
                </ListGroup>
              </Panel>
            </div>
          </Col>
          </Row>
        </Grid>
        </div>
        
        
      </div>
    );
  }
}

export default MatchUp;