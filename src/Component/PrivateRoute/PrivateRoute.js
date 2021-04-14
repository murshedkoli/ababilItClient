import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { mainUser } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

const [loggedInUser] = useContext(mainUser);


  

    return (
        <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/admin/login",
                
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;



