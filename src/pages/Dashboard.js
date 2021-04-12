import { Button } from "@material-ui/core";
import firebase from "firebase/app";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "firebase/auth";

const Dashboard = () => {
  const history = useHistory();
  const { signOut } = useAuth();
  const logout = () => {
    signOut();
    history.push("/");
  };
  return (
    <>
      <h1>Protected Route</h1>
      <Button onClick={logout}>logout</Button>
    </>
  );
};

export default Dashboard;
