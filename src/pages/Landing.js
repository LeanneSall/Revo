import { Container, Typography, Button, Link } from "@material-ui/core";
import adventure from "../images/adventure.svg";
import React from "react";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" align="center">
        Revo
      </Typography>
      <div className="img">
        <img className="adventure" src={adventure} />
      </div>
      <Typography variant="h4" align="center">
        Reach Your Potential
      </Typography>
      <Typography variant="h5" align="center">
        Revolutionize Your Life
      </Typography>
      <Button onClick={() => history.push("/register")} variant="contained">
        Sign Up
      </Button>
      <Link onClick={() => history.push("/login")} variant="body2">
        {"Already Have An Account? Sign In"}
      </Link>
    </Container>
  );
};

export default Landing;
