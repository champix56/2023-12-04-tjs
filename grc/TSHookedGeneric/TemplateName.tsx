import React, { FC, useEffect, useState } from 'react';
import styles from './TemplateName.module.css';

interface ITemplateNameProps { }
/**
 * TemplateName component
 * @param props 
 * @returns TemplateName rendered component
 */
const TemplateName: FC<ITemplateNameProps> = (props) => {
  const initialState = {}
  const [state, setstate] = useState(initialState)
  useEffect(() => {
    /*mount */
    return () => {
      /*unmount*/
    };
  }, [])
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
}
TemplateName.defaultProps = {}

export default TemplateName;
