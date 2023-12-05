import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import PropTypes from 'prop-types'

interface IFooterProps {
  style?: object
 }

/**
 * Footer component
 * @param props 
 * @returns 
 */
const Footer: React.FC<IFooterProps> = (props) => {

  return (
    <div className={styles.Footer} data-testid="Footer" style={{...props.style}}>
      MemeEditor &copy; 2023
    </div>
  );
};
Footer.propTypes = {
  style: PropTypes.object
};
Footer.defaultProps = {};
export default Footer;
