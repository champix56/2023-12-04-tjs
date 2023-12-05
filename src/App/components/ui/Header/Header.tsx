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
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.Header} data-testid="Header" style={{...props.style}}>
      Header Component
    </div>
  );
};
Header.propTypes = {
  style: PropTypes.object
};
Header.defaultProps = {};
export default Header;
