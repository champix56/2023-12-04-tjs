import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import PropTypes from 'prop-types'

interface INavbarProps { }

/**
 * Navbar component
 * @param props 
 * @returns 
 */
const Navbar: React.FC<INavbarProps> = (props) => {
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.Navbar} data-testid="Navbar" style={...props.style}>
      Navbar Component
    </div>
  );
};
Navbar.propTypes = {
  style: PropTypes.object
};
Navbar.defaultProps = {};
export default Navbar;
