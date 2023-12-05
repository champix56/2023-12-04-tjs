import React, { useState, useEffect } from "react";
import styles from "./MemeSvgViewer.module.css";
import PropTypes from 'prop-types'

interface IMemeSvgViewerProps {
  style?: object
 }

/**
 * MemeSvgViewer component
 * @param props 
 * @returns 
 */
const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = (props) => {
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer" style={{...props.style}}>
      MemeSvgViewer Component
    </div>
  );
};
MemeSvgViewer.propTypes = {
  style: PropTypes.object
};
MemeSvgViewer.defaultProps = {};
export default MemeSvgViewer;
