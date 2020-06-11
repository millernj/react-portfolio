import React from "react";

function Container(props) {
  return <div 
    className={`container${props.fluid ? "-fluid" : ""}`} 
    style={{backgroundImage: `url(${props.backgroundImage})`}} 
    {...props} 
    />;
}

export default Container;
