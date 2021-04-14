import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import "firebase/auth";
import firebase from "../config/firebase";
import axios from "axios";
//initialize firestore

//create context
const AddContext = createContext();

export const addWidget = () => {
  return useContext(AddContext);
};

export const AddProvider = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState();
  const [loading, setLoading] = useState(true);

  // Get Users array of widgetId's and look in widget collection for those widgets
  const getUser = () => setCurrentUserId(firebase.auth().currentUser.uid);
  axios.get("http://localhost:5000/");
  // Populate dashboard with widgets that match that ID
  // To get the specific widget use the widgetID to go through the list of created widgets and match also with the UserID therfor that is there created widget

  const value = {
    currentUser,
  };

  return (
    <AddContext.Provider value={value}>
      {!loading && children}
    </AddContext.Provider>
  );
};
