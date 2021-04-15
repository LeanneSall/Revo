import { Container } from "@material-ui/core";
import React from "react";
import Nav from "../components/dashboard/nav";
import DisplayJournal from "../components/Journal/displayJournal";

export default function UserJournal() {
  return (
    <Container>
      <Nav i={"Journal"} />
      <DisplayJournal />
    </Container>
  );
}
