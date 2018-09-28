import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

class Navbar extends Component {

    render() {
      return (
        <BrowserRouter>
          <Navbar inverse collapseOnSelect> 
              <Navbar.Brand>
                  <a href="#home">Home</a>
              </Navbar.Brand>
            </Navbar>
        </BrowserRouter>
    );
  }
}

export default Navbar;