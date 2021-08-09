import React from 'react';
import {Component} from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom";
import MainContainer from './containers/MainContainer';
import Apparel from './containers/ApparelContainer'


class App extends Component {
 
  

  render() {
      return (
              <div>
                  <br />
                
                    
                      <Switch>
                              <Route exact path="/"> <MainContainer/> </Route>
                              <Route exact path="/apparel">< Apparel /> </Route>
                            
                      </Switch> 
              </div> 
      )
  }

}

export default App;
