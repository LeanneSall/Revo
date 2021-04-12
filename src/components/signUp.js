import React, { useState } from "react";
import firebase from "../config/firebase";

const SignUp = () => {
  const [fName, setfName] = React.useState("");
  const [lName, setlName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = () => {
    firebase.auth().createUserWithEmailAndPassword(setEmail, setPassword);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {/* {errors.message && <p style={{ color: "red" }}>{errors.message}</p>} */}

      <form onSubmit={onSubmit}>
        <label for="fname">First name:</label>
        <br />
        <input type="text" value={fName} name="fname" />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input type="text" value={lName} name="fname" />
        <br />
        <label for="fname">email:</label>
        <br />
        <input type="text" value={email} name="fname" />
        <br />
        <label for="lname">password:</label>
        <br />
        <input type="password" value={password} name="password" />
        <br />
        <button type="submit" label="submit">
          Submit
        </button>
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
  );
};

export default SignUp;
