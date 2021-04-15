import React from "react";
import { Container, Typography, Button, Link } from "@material-ui/core";
import adventure from "../images/adventure.svg";

export default function LandingPage({ data }) {
  const style = {
    backgroundColor: "#dd2c2c;",
  };
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
      <Button
        className="Button"
        onClick={() => data.push("/register")}
        variant="contained"
      >
        Sign Up
      </Button>
      <Link onClick={() => data.push("/login")} variant="body2">
        {"Already Have An Account? Sign In"}
      </Link>
    </Container>
  );
}
