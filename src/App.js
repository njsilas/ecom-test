import React from 'react';
import {Component} from 'react';
import './App.css';
import Router from './Router';
import { NavOptions } from './Navbar';


class App extends Component {
 
  

  render() {
      return (
              <div>
                  <NavOptions />
                  <Router />
                
                    
              </div> 
      )
  }

}

export default App;
