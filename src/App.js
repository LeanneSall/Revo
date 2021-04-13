import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import firebase from "firebase/app";
import { AuthProvider } from "./hooks/useAuth";
import { WidgetProvider } from "./hooks/useWidget";
import fireStart from "./config/firebase";

function App() {
  return (
    <AuthProvider>
      <WidgetProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </WidgetProvider>
    </AuthProvider>
  );
}

export default App;
