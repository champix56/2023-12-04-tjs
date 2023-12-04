import React from "react";
import styles from "./Button.module.css";
import PropTypes from 'prop-types'

interface IButtonProps {
  text: string;
  bgColor?: 'tomato' | 'skyblue' | undefined,
  onButtonClick?: Function
}
const Button: React.FunctionComponent<IButtonProps> = (props) => {
  console.log(props);
  const onClick=(evt:React.MouseEvent) => {
    //cliqué
    if (props.onButtonClick !== undefined) { props.onButtonClick('coucou'); }
    //declique
  }
  return (
    <button
      className={styles.Button}
      style={{ backgroundColor: props.bgColor }}
      onClick={onClick}
    >
      {props.text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.oneOf(['tomato', 'skyblue']),
  onButtonClick: PropTypes.func
}
export default Button;
