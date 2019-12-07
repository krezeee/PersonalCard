import React from "react";
import { Grow } from "@material-ui/core";
import DescriptionParagraph from "./DescriptionParagraph";

function ProjectTemplate(props) {
  let paragraphs = props.description.map((paragraph, index) => {
    return <DescriptionParagraph key={index} description={paragraph} />;
  });

  return (
    <Grow
      in={props.animate}
      style={{ transformOrigin: "0 0 0" }}
      {...(props.animate ? { timeout: props.timeout } : {})}
    >
      <div
        style={{
          width: "28em",
          display: "grid",
          marginTop: "0.5em",
          gridTemplateColumns: "1fr 2fr"
        }}
      >
        <p
          style={{
            fontSize: "0.8em",
            gridColumn: "1",
            textAlign: "left"
          }}
        >
          {props.title}
        </p>
        {paragraphs}
      </div>
    </Grow>
  );
}

export default ProjectTemplate;
