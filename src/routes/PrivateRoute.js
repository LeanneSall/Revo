import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={() => (currentUser ? children : <Redirect to="/login" />)}
    ></Route>
  );
};

export default PrivateRoute;
