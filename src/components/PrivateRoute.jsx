import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAdmin } from '../context/AdminAuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { admin } = useAdmin();
  return (
    <Route
      {...rest}
      render={(props) =>
        !admin ? <Redirect to="/admin" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
