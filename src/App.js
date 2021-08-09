import React from 'react';
import {Component} from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom";
import MainContainer from './containers/MainContainer';
<<<<<<< HEAD
import Router from './Router';
import { NavOptions } from './Navbar';
=======
import Apparel from './containers/ApparelContainer'
>>>>>>> da2abe94267a6a167f82532a1f2453c969380d43


class App extends Component {
 
  

  render() {
      return (
              <div>
                  <NavOptions />
                  <Router />
                
                    
<<<<<<< HEAD
=======
                      <Switch>
                              <Route exact path="/"> <MainContainer/> </Route>
                              <Route exact path="/apparel">< Apparel /> </Route>
                            
                      </Switch> 
>>>>>>> da2abe94267a6a167f82532a1f2453c969380d43
              </div> 
      )
  }

}

export default App;
