import React, {  } from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {


const user= JSON.parse(sessionStorage.getItem('user'));

  

    return (
        <Route
        {...rest}
        render={({ location }) =>
        user ? (
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



