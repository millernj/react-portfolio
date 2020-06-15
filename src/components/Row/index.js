import React from "react";

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""} ${props.center ? "justify-content-center" : ""}`} {...props} />;
}

export default Row;
