import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import { AuthProvider } from "./hooks/useAuth";
import UserHabits from "./pages/UserHabits";
import UserJournal from "./pages/UserJournal";
import UserWater from "./pages/UserWater";
import TrackSpecific from "./components/Habits/trackSpecific";
import NewJournal from "./components/Journal/newJournal";

function App() {
  return (
    <AuthProvider>
      {/* <WidgetProvider> */}

      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/habits">
            <UserHabits />
          </PrivateRoute>
          <PrivateRoute path="/journal">
            <UserJournal />
          </PrivateRoute>
          <PrivateRoute path="/water">
            <UserWater />
          </PrivateRoute>
          <PrivateRoute path="/new">
            <TrackSpecific />
          </PrivateRoute>
          <PrivateRoute path="/newj">
            <NewJournal />
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
      {/* </WidgetProvider> */}
    </AuthProvider>
  );
}

export default App;
