import React from "react";
import PropTypes from "prop-types";
import styles from './TemplateName.module.css'
/**
 * TemplateName component
 * @param props 
 * @returns React.Element
 */
const TemplateName = (props) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      templateName
    </div>
  );
};

TemplateName.propTypes = {};
TemplateName.defaultProps = {};
export default TemplateName;
