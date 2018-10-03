import React, { Component } from 'react';
// import {BrowserRouter} from 'react-router-dom';
import {Form, FormGroup, FormControl, Button, Glyphicon} from "react-bootstrap";

class MyTeam extends Component {
  render() {

    

    return (
      <div className="App">

        <h3>Create Team</h3>
        <Form className="form-inline mb-4">
          <input className="form-control form-control-sm mr-3 w-75" onChange={this.handleTeamNameChange} type="text" name="TeamName" placeholder="Team Name" aria-label="Search" required />
          <i className="fa fa-search" aria-hidden="true"></i>
          <Button bsSize="small">
          <Glyphicon glyph="plus" />
        </Button>
        </Form>
      
        <hr />
        
        <h3>Roster</h3>
        
      </div>
    );
  }
}

export default MyTeam;