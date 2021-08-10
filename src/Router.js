import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Apparel from './components/Apparel';
import Accessories from './components/Accessories';
class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/apparel' component={Apparel} />
                    <Route exact path='/accessories' component={Accessories} />
                </Switch>
            </div>
        );
    }
}

export default Router;