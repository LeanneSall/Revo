import React from "react";
import LandingPage from "../components/landing";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();
  return (
    <div>
      <LandingPage data={history} />
    </div>
  );
};

export default Landing;
