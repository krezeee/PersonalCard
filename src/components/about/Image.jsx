import React from "react";
import MyPhoto from "../../content/MyPhoto.jpg";
import { Grow } from "@material-ui/core";

export const Image = () => {
  return (
    <Grow in={true} timeout={1000}>
      <img
        style={{
          borderRadius: "50%",
          width: "40vw",
          height: "40vw",
          maxWidth: "12rem",
          maxHeight: "12rem",
          boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.4)",
        }}
        src={MyPhoto}
        alt=""
      />
    </Grow>
  );
};
