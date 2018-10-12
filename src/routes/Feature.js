import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from './requireAuth';

class Feature extends Component {

  

  render() {
    return <div>This is the feature!</div>;
  }
}

export default requireAuth(Feature);