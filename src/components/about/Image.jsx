import React from "react";
import MyPhoto from "../../content/MyPhoto.jpg";
import { Grow } from "@material-ui/core";

export const Image = () => {
  return (
    <Grow in={true} timeout={1000}>
      <img
        style={{
          borderRadius: "50%",
          width: "6em",
          height: "6em",
          boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.4)"
        }}
        src={MyPhoto}
        alt=""
      />
    </Grow>
  );
};
