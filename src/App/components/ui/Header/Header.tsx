import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import PropTypes from 'prop-types'

interface IHeaderProps {
  style?: object
 }

/**
 * Header component
 * @param props 
 * @returns 
 */
const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <div className={styles.Header} data-testid="Header" style={{...props.style}}>
       <span className={styles.meme}>Meme</span>.<span className={styles.js}>js</span>
    </div>
  );
};
Header.propTypes = {
  style: PropTypes.object
};
Header.defaultProps = {};
export default Header;
