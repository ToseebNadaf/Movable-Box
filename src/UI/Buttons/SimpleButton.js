import React from "react";
import classes from "./SimpleButton.module.css";
const SimpleButton = (props) => {
  return (
    <div onClick={props.onClick}>
      <button className={classes.basic}>+ Add Box</button>
    </div>
  );
};

export default SimpleButton;
