import React, { FC } from 'react';
import styles from './FlexHGrow3.module.css';
import PropTypes from 'prop-types'

interface FlexHGrow3Props {
  children: React.ReactElement | Array<React.ReactNode | string>
  style?: object
}

/**
 * FlexHGrow3 component
 * @param props 
 * @returns React.Element
 */
const FlexHGrow3: FC<JSX.IntrinsicAttributes &FlexHGrow3Props> = (props) => (
  <div className={styles.FlexHGrow3} data-testid="FlexHGrow3" style={{ ...props.style }}>
    {props.children}
  </div>
);
FlexHGrow3.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object
}
FlexHGrow3.defaultProps = {}
export default FlexHGrow3;
