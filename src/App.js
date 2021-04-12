import React from "react";

import SignUp from "./components/signUp";

import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  return (
    <div>
      <SignUp />
    </div>
  );
}

export default App;
