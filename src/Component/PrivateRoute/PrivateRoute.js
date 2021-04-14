import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import { mainUser } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

const [loggedInUser, setLoggedInUser] = useContext(mainUser);


  

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



