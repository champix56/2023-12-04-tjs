import React from "react";
import styles from "./Button.module.css";
import PropTypes from 'prop-types'

const Button = (props) => {
  console.log(props);
  return (
    <button
      className={styles.Button}
      style={{ backgroundColor: props.bgColor }}
    >
      {props.text}
    </button>
  );
};
Button.propTypes={
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string
}
export default Button;
