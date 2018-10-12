import React, { Component } from 'react';
// import {BrowserRouter} from 'react-router-dom';
// import './App.css';
import {Form, Table} from "react-bootstrap";
// var MySportsFeeds = require("mysportsfeeds-node");
// var msf = new MySportsFeeds("1.2", true);
// var msf = new MySportsFeeds("1.2", true);
// msf.authenticate(key, Sfpw);

// var key =  'b8c016de-50bd-4b96-95fa-901057';
// var Sfpw = 'motorsport';

// var PlayerList = msf.getData('nba', '2017-2018-regular', 'player','json');

// const search = $.getJSON(PlayerList, function (data) {
//     console.log(data);
// })


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

        <h3>Season Average Stats</h3>
        
        <Table striped bordered condensed hover responsive id="playerTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Team</th>
              <th>Position</th>
              <th>Points</th>
              <th>Rebounds</th>
              <th>Assists</th>
              <th>Steals</th>
              <th>Blocks</th>
              <th>Turnovers</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody id="playerTable">
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Players;

// $.getJSON('https://api.mysportsfeeds.com/v1.2/pull/nba/2018-2019-regular/active_players.json', function (data) {
//     console.log(data);

//       for (i = 0; i <= data.players.length; i++) {

//         console.log(data.cumulativeplayerstats[1].playerstatsentry);
//         console.log(data.playerstatsentry[i].player)
        // var name,
        // var team,
        // var position,
        // var avgPoints,
        // var avgRebounds,
        // var avgAssists,
        // var avgSteals,
        // var avgBlocks,
        // var avgTurnovers,

        // var tr = $('<tr/>');
        // tr.append('<td>name</td>'),
        // tr.append('<td>team</td>'),
        // tr.append('<td>position</td>'),
        // tr.append('<td>avgPoints</td>'),
        // tr.append('<td>avgRebounds</td>'),
        // tr.append('<td>avgAssists</td>'),
        // tr.append('<td>avgSteals</td>'),
        // tr.append('<td>avgBlocks</td>'),
        // tr.append('<td>avgTurnovers</td>'),
        // $('#playerTable').append(tr);
        
      //   }
      // })