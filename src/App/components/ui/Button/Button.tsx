import React, { useEffect, useState } from "react";
import styles from "./Button.module.css";
import PropTypes from 'prop-types'
import { JsxElement } from "typescript";

interface IButtonProps {
  children: any;
  bgColor?: 'tomato' | 'skyblue' | 'aquamarine' | 'red' | undefined,
  onButtonClick?: Function
}
const Button: React.FunctionComponent<IButtonProps> = (props) => {
  
  console.log(props);

  const [isClicked, setisClicked] = useState({clilckState:false, hello:'de lu'})
  useEffect(() => {
    console.log('chauffe marcel');
    setTimeout(() => {
      setisClicked({...isClicked,clilckState:false})
    }, 350);
  }, [isClicked.clilckState])

  const onClick = (evt: React.MouseEvent) => {
    setisClicked({...isClicked,clilckState:true});
    //cliqué
    //setIsClicked(true);
    if (props.onButtonClick !== undefined) { props.onButtonClick('coucou'); }
    //declique
  }
  return (
    <button
      className={`${styles.Button}${isClicked ? ' ' + styles.clicked : ''}`}
      style={{ backgroundColor: props.bgColor }}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.oneOf(['tomato', 'skyblue', 'aquamarine', 'red']),
  onButtonClick: PropTypes.func
}
Button.defaultProps = {
  onButtonClick: () => { console.log('pas de buttonClick sur ce button'); }
}
export default Button;
