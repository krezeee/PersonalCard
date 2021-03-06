import React from "react";
import posed from "react-pose";

const withPress = (Component, callback) => {
  const Wrapped = posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    },
    hover: {
      scale: 1.2,
    },
    press: {
      scale: 1.1,
    },
  });

  return (
    <Wrapped
      style={{
        width: "clamp(1.5rem, 2.5vw, 3.5rem)",
        height: "clamp(1.5rem, 2.5vw, 3.5rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0.4em",
      }}
    >
      <Component callback={callback} />
    </Wrapped>
  );
};

export default withPress;
