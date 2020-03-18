import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Home from "./Home"
import Users from "./Users"



export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <nav>
          <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
          </ul>
          </nav>
          
        </Switch>
        <Switch>
          <ul>
            <li>
                <Route exact path="/home">
                    <Home />
                </Route>
            </li>
            <li>
                <Route exact path="/users">
                    <Users />                
                </Route>
            </li>
          </ul>
          
          
        </Switch>
        
    </BrowserRouter>

  );
}

