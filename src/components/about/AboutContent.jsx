import React from "react";
import { Grow } from "@material-ui/core";

export const AboutContent = () => {
  return (
    <Grow in={true} timeout={1000}>
      <div
        style={{
          maxWidth: "18em"
        }}
      >
        <p
          style={{
            fontSize: "1em",
            marginBottom: "2em"
          }}
        >
          My name is Paweł Krężel and I'm a Software Engineer.
        </p>
        <p
          style={{
            fontSize: "0.5em",
            textAlign: "justify",
            marginBottom: "2em"
          }}
        >
          A passionate for innovation and new technology person, with strong
          background in Civil Engineering. With most of my career spent around
          Building Information Modelling, I am interrested in exploring new ways
          of automation in the building industry! I also like web technologies,
          especially 3D graphics in the browser, thats so fun!
        </p>
        <p
          style={{
            fontSize: "0.6em",
            marginBottom: "2em"
          }}
        >
          Any idea for a project?
        </p>
        <p
          style={{
            fontSize: "0.7em"
          }}
        >
          Reach me out!
        </p>
      </div>
    </Grow>
  );
};

export default AboutContent;
