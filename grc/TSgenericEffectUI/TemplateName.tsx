import React, { useState, useEffect } from "react";
import styles from "./TemplateName.module.css";
import PropTypes from 'prop-types'

interface ITemplateNameProps {
  style?: object
 }

/**
 * TemplateName component
 * @param props 
 * @returns 
 */
const TemplateName: React.FC<ITemplateNameProps> = (props) => {
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.TemplateName} data-testid="TemplateName" style={{...props.style}}>
      TemplateName Component
    </div>
  );
};
TemplateName.propTypes = {
  style: PropTypes.object
};
TemplateName.defaultProps = {};
export default TemplateName;
