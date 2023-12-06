import React, { useState, useEffect } from "react";
import styles from "./MemeForm.module.css";
import PropTypes, { func } from 'prop-types'
import { ImageInterface, MemeInterface, emptyMeme } from "orsys-tjs-meme";
import { updateCurrent } from "../../../store/current";
// import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
interface IMemeFormProps {
  style?: object
  meme: MemeInterface
  onMemeChange: Function,
  images: Array<ImageInterface>
}
interface IMemeFormState { }

const initialState: IMemeFormState = {};
/**
 * MemeForm component
 * @param props 
 * @returns 
 */
const MemeForm: React.FC<IMemeFormProps> = (props) => {
  const [meme, setmeme] = useState(emptyMeme)
  const [images, setimages] = useState([])

  return (
    <div className={styles.MemeForm} data-testid="MemeForm" style={{ ...props.style }}>
      <form onSubmit={(evt) => {
        evt.preventDefault();
        //  props.onMemeChange(state);
      }}>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input name="titre" id="titre" value={props.meme.titre} onChange={(evt) => {
          props.onMemeChange({ ...props.meme, titre: evt.target.value })
        }} />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image" value={props.meme.imageId} onChange={(evt) => {
          props.onMemeChange({ ...props.meme, imageId: Number(evt.target.value) })
        }} >
          <option value="-1">no img</option>
          {
            props.images.map((img, i) => {
              return <option key={'i' + i} value={img.id}>{img.name}</option>
            })
          }
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input name="text" id="text" type="text" value={props.meme.text} onChange={(evt) => {
          props.onMemeChange({ ...props.meme, text: evt.target.value })
        }} />
        <br />
        <label htmlFor="x">
          <h2 className={styles.inline}>x :</h2>
        </label>
        <input className={styles.smallNumber} name="x" id="x" type="number" value={props.meme.x} onChange={(evt) => {
          props.onMemeChange({ ...props.meme, x: Number(evt.target.value) })
        }} />
        <label htmlFor="y">
          <h2 className={styles.inline}>y :</h2>
        </label>
        <input className={styles.smallNumber} name="y" id="y" type="number" value={props.meme.y} onChange={(evt) => {
          props.onMemeChange({ ...props.meme, y: Number(evt.target.value) })
        }} />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 className={styles.inline}>color :</h2>
        </label>
        <input name="color" id="color" type="color" value={props.meme.color} onChange={(evt) => {
          props.onMemeChange({ ...props.meme, color: evt.target.value })
        }} />
        <br />
        <label htmlFor="fontSize">
          <h2 className={styles.inline}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={props.meme.fontSize} onChange={(evt) => {
            props.onMemeChange({ ...props.meme, fontSize: Number(evt.target.value) })
          }}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 className={styles.inline}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={props.meme.fontWeight} onChange={(evt) => {
            props.onMemeChange({ ...props.meme, fontWeight: evt.target.value })
          }}
        />
        <br />
        <input name="underline" id="underline" type="checkbox" />
        &nbsp;
        <label htmlFor="underline">
          <h2 className={styles.inline}>underline</h2>
        </label>
        &nbsp;<h2 className={styles.inline}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 className={styles.inline}>italic</h2>
        </label>
        &nbsp;
        <input name="italic" id="italic" type="checkbox" />
        <hr />
        <br />
        <label htmlFor="frameSizeX">
          <h2 className={styles.inline}>frame size X :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
        />
        px
        <br />
        <label htmlFor="frameSizeY">
          <h2 className={styles.inline}>frame size y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
        />
        px
        <br />
        <hr />
        <br />
        <div style={{ justifyContent: "space-between", display: 'flex' }}>
          <button style={{ backgroundColor: 'tomato' }} type="reset">reset</button>
          <button style={{ backgroundColor: 'skyblue' }} type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};
MemeForm.propTypes = {
  style: PropTypes.object
};
MemeForm.defaultProps = {};


export default MemeForm;
