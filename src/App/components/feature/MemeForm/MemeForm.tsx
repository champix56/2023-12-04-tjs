import React, { useState, useEffect } from "react";
import styles from "./MemeForm.module.css";
import PropTypes from 'prop-types'
import { MemeInterface } from "orsys-tjs-meme";

interface IMemeFormProps {
  style?: object,
  meme: MemeInterface
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

  return (
    <div className={styles.MemeForm} data-testid="MemeForm" style={{ ...props.style }}>
      <form>
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input name="titre" id="titre" />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="image" id="image">
          <option value="1">futurama1.jpg</option>
          <option value="2">futurama2.png</option>
          <option value="3">futurama3.png</option>
          <option value="4">gwenadu.jpg</option>
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input name="text" id="text" type="text" />
        <br />
        <label htmlFor="x">
          <h2 className={styles.inline}>x :</h2>
        </label>
        <input className={styles.smallNumber} name="x" id="x" type="number" />
        <label htmlFor="y">
          <h2 className={styles.inline}>y :</h2>
        </label>
        <input className={styles.smallNumber} name="y" id="y" type="number" />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 className={styles.inline}>color :</h2>
        </label>
        <input name="color" id="color" type="color" />
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
        <br/>
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
