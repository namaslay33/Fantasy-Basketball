import React, { Component } from 'react';
// import {BrowserRouter} from 'react-router-dom';
// import './App.css';
import {Form, Table} from "react-bootstrap";

class Players extends Component {
  render() {
    return (
      <div className="App">
        
        <h3>Search Player By Name</h3>
        <Form className="form-inline mb-4">
          <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </Form>

        <hr />
        
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Points</th>
              <th>Rebounds</th>
              <th>Assists</th>
              <th>Steals</th>
              <th>Blocks</th>
              <th>Turnovers</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Players;