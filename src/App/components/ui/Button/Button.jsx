import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  console.log(props);
/*
  let bgColor = undefined;
  switch (props.model) {
    case "primary":
      bgColor = "skyblue";
      break;
    case "secondary":
      bgColor = "skyblue";
      break;
    default:
      bgColor = "skyblue";
      break;
  }*/
  return (
    <button
      className={styles.Button}
      style={{ backgroundColor: props.bgColor }}
    >
      {props.text}
    </button>
  );
};

export default Button;
