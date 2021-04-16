import { Container, Typography } from "@material-ui/core";
import React from "react";

export default function UserWater() {
  return (
    <>
      <iframe
        width="100%"
        height="800px"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <Typography variant="h1" style={{ paddingTop: "50px" }}>
        This concludes my presentation. Any questions?
      </Typography>
    </>
  );
}
