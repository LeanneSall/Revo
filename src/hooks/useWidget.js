import React from "react";

import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../config/firebase";
import { useHistory } from "react-router-dom";
import "firebase/auth";
import fireStart from "../config/firebase";
//initialize firestore

//create context
const WidgetContext = createContext();

export const useWidgets = () => {
  return useContext(WidgetContext);
};

export default function WidgetProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  //---------------Habits------------------

  const getUserHabits = () => {};

  const createNewHabit = () => {};

  const updateHabit = () => {};

  const deleteHabit = () => {};

  //---------------WaterIntake------------------

  const habits = {
    getUserHabits,
    createNewHabit,
    updateHabit,
    deleteHabit,
  };
  return (
    <WidgetContext.Provider value={value}>
      {!loading && children}
    </WidgetContext.Provider>
  );
}
