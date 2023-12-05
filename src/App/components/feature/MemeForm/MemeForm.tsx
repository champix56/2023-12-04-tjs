import React, { useState, useEffect } from "react";
import styles from "./MemeForm.module.css";
import PropTypes from 'prop-types'

interface IMemeFormProps {
  style?: object
 }
interface IMemeFormState { }

const initialState: IMemeFormState = {};
/**
 * MemeForm component
 * @param props 
 * @returns 
 */
const MemeForm: React.FC<IMemeFormProps> = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.MemeForm} data-testid="MemeForm" style={{...props.style}}>
      MemeForm Component
    </div>
  );
};
MemeForm.propTypes = {
  style: PropTypes.object
};
MemeForm.defaultProps = {};
export default MemeForm;
