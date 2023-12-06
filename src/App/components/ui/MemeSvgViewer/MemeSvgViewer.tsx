import React, { useState, useEffect } from "react";
import styles from "./MemeSvgViewer.module.css";
import PropTypes from 'prop-types'
import { ImageInterface, MemeInterface } from "orsys-tjs-meme";

interface IMemeSvgViewerProps {
  style?: object,
  meme: MemeInterface,
  image?: ImageInterface
}

/**
 * MemeSvgViewer component
 * @param props 
 * @returns 
 */
const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = (props) => {
  return (
    <svg
      viewBox={`0 0 ${props.image ? props.image.w : 100} ${props.image?.h ?? 100}`}
      className={styles.MemeSvgViewer}
      data-testid="MemeSvgViewer" style={{ ...props.style }}>
      {props.image && <image href={props.image.url} x="0" y="0" />}
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
