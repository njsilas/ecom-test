import React from 'react';
import {Component} from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom";
import MainContainer from './containers/MainContainer';


class App extends Component {
 
  

  render() {
      return (
              <div>
                  <br />
                
                    
                      <Switch>
                              <Route exact path="/"> <MainContainer/> </Route>
            
                            
                      </Switch> 
              </div> 
      )
  }

}

export default App;
