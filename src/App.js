import React from 'react';
import {Component} from 'react';
import './App.css';
import Router from './Router';
import { NavOptions } from './Navbar';
console.log(2)
class App extends Component {
 componentDidMount() {
         console.log(this.props.client.product.fetchAll().then((products) => {
                // Do something with the products
                console.log(products[0].productType);
              }))
 }
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
