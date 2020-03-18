import React from 'react';
import { Switch, Route, useParams } from 'react-router';

export function User() {

    let {id} = useParams();

  return (
    <Route  path="/users/:name">
      <div>
        <p id="one">1</p>
        <p id="two">2</p>
        <p id="three">3</p>
      </div>
    </Route>



  );
}

export default User;
