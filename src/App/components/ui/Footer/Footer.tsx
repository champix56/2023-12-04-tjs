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
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.Footer} data-testid="Footer" style={{...props.style}}>
      Footer Component
    </div>
  );
};
Footer.propTypes = {
  style: PropTypes.object
};
Footer.defaultProps = {};
export default Footer;
