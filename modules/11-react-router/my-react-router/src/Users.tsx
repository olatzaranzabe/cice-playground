import React from 'react';
import { Switch, Route, useParams } from 'react-router';
import User from './User'
export const Users: React.FC = () => {

  return (
    
      <div>
          <Switch>
              <Route path={`/:id`}>
                  <User />
              </Route>
          </Switch>
      </div>


  );
}

export default Users;
