import React, { FC } from 'react';
import styles from './FlexWGrow1.module.css';
import PropTypes from 'prop-types'

interface FlexWGrow1Props {
  children: React.ReactElement | Array<React.ReactNode | string>
  style?: object
}

/**
 * FlexWGrow1 component
 * @param props 
 * @returns React.Element
 */
const FlexWGrow1: FC<FlexWGrow1Props> = (props) => (
  <div className={styles.FlexWGrow1} data-testid="FlexWGrow1" style={{ ...props.style }}>
    {props.children}
  </div>
);
FlexWGrow1.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object
}
FlexWGrow1.defaultProps = {}
export default FlexWGrow1;
