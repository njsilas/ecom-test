import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Client from 'shopify-buy'
import { BrowserRouter as Router } from 'react-router-dom'

const client = Client.buildClient({
  storefrontAccessToken: '775f212258a0b29478371a6edbdab2d5',
  domain: 'ecom-mock-up.myshopify.com'
  })

ReactDOM.render(
  <Router>
    <App client = {client} />
    </Router>,
document.getElementById('root')
);



 
client.product.fetchAll().then((products) => {
    // Do something with the products
 
    console.log(products[0].productType
      )
  });
 
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
