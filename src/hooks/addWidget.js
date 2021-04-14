import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../config/firebase";
import { useHistory } from "react-router-dom";
import "firebase/auth";
import fireStart from "../config/firebase";
//initialize firestore

//create context
const AddContext = createContext();

export const addWidget = () => {
  return useContext(AddContext);
};

export const AddProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Get Users array of widgetId's and look in widget collection for those widgets
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
