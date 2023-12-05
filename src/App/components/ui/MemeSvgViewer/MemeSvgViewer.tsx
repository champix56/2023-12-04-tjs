import React, { useState, useEffect } from "react";
import styles from "./MemeSvgViewer.module.css";
import PropTypes from 'prop-types'
import { MemeInterface } from "orsys-tjs-meme";

interface IMemeSvgViewerProps {
  style?: object,
  meme: MemeInterface
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
    <svg viewBox="0 0 100 100" className={styles.MemeSvgViewer} data-testid="MemeSvgViewer" style={{ ...props.style }}>
      <image href="" x="0" y="0" />
      <text x={props.meme.x} y={props.meme.y}
        fontWeight={props.meme.fontWeight}
        fill={props.meme.color}
        textDecoration={props.meme.underline ? 'underline' : 'none'}
        fontStyle={props.meme.italic ? 'italic' : 'normal'}
        style={{ fontSize: props.meme.fontSize }}
      >{props.meme.text}</text>
    </svg>
  );
};

MemeSvgViewer.defaultProps = {};
export default MemeSvgViewer;
