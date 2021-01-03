import React from "react";

function Container(props) {
  return <div 
    className={`container${props.fluid ? "-fluid" : ""} ${props.center ? "justify-content-center" : ""}`} 
    // style={{backgroundImage: `url(${props.backgroundimage})`}} 
    {...props} 
    />;
}

export default Container;
