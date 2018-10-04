import React, { Component } from 'react';
// import {BrowserRouter} from 'react-router-dom';
import {Form, Button, Glyphicon, Grid, Row, Col, Panel, ListGroup, ListGroupItem} from "react-bootstrap";

class MyTeam extends Component {
     constructor(props) {
      super(props);
      this.state = {TeamName:'', setTeamName: ''};
      this.onTeamAdd = this.onTeamAdd.bind(this);
      this.TeamNameChange = this.TeamNameChange.bind(this);
    }
  
    TeamNameChange(e){
      this.setState({TeamName:e.target.value})
    }

    onTeamAdd = (e) => {
      e.preventDefault();
      console.log("i clicked")
      this.setState({setTeamName: this.state.TeamName})
      
    }

  render() {
    return (
      <div className="App">

        <h3>Create Team</h3>
        <Form className="form-inline mb-4">
          <input className="form-control form-control-sm mr-3 w-75" onChange={this.TeamNameChange} type="text" name="TeamName" placeholder="Team Name" aria-label="Search" required />
          {/* <input className="form-control form-control-sm mr-3 w-75"  type="text" name="TeamName" placeholder="Team Name" aria-label="Search" required /> */}
          <i className="fa fa-search" aria-hidden="true"></i>
          <Button onClick={this.onTeamAdd} bsSize="small">
          <Glyphicon glyph="plus" />
        </Button>
        </Form>
      
        <hr />
        
        <h3>Team Rosters</h3>
        
        <br />

        <Grid>
          <Row className="show-grid">
            <Col xs={4} md={4}>
              <Panel>
                <Panel.Heading><h5><strong>{this.state.setTeamName}</strong></h5></Panel.Heading>
                <ListGroup>
                  <ListGroupItem>Point Guard</ListGroupItem>
                  <ListGroupItem>Shooting Guard</ListGroupItem>
                  <ListGroupItem>Guard / Forward</ListGroupItem>
                  <ListGroupItem>Small/Power Forward</ListGroupItem>
                  <ListGroupItem>Power Foward/Center</ListGroupItem>
                </ListGroup>
              </Panel>
          </Col>
        </Row>
       </Grid>


        
      </div>
    );
  }
};

export default MyTeam;