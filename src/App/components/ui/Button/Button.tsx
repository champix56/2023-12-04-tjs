import React, { useEffect, useState } from "react";
import styles from "./Button.module.css";
import PropTypes from 'prop-types'

interface IButtonProps {
  text: string;
  bgColor?: 'tomato' | 'skyblue' | undefined,
  onButtonClick?: Function
}
const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const [isClicked, setisClicked] = useState({clilckState:false, hello:'de lu'})
  useEffect(() => {
    console.log('chauffe marcel');
    setTimeout(() => {
      setisClicked({...isClicked,clilckState:false})
    }, 350);
  }, [isClicked.clilckState])
  console.log(props);
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
      {props.text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.oneOf(['tomato', 'skyblue']),
  onButtonClick: PropTypes.func
}
Button.defaultProps = {
  onButtonClick: () => { console.log('pas de buttonClick sur ce button'); }
}
export default Button;
