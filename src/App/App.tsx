import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FlexHGrow3 from "./components/layout/FlexHGrow3/FlexHGrow3";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexWGrow1 from "./components/layout/FlexWGrow1/FlexWGrow1";
import Footer from "./components/ui/Footer/Footer";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";
import MemeForm from "./components/feature/MemeForm/MemeForm";
import { emptyMeme, ImageInterface, MemeInterface } from "orsys-tjs-meme";
import { REST_ARD } from "./config/config";
import {store} from './store/store'
interface IAppProps { }

const App: React.FC<IAppProps> = (props) => {
  const [memeState, setMemeState] = useState<MemeInterface>(emptyMeme)
  const [imageState, setImageState] = useState<Array<ImageInterface>>([])
  console.log(memeState,store)
  useEffect(() => {
    fetch(`${REST_ARD}/images`, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "API-TOKEN": "sdfghjklkjhgfd"
      }
    })
      .then((r) => { return r.json() })
      .then((arr) => { setImageState(arr) });
  }, [])
  return (
    <div className="App">
      <FlexHGrow3>
        <Header />
        <Navbar />
        <FlexWGrow1>
          <MemeSvgViewer meme={memeState} image={imageState.find(img => img.id === memeState.imageId)} />
          <MemeForm meme={memeState} onMemeChange={(meme: MemeInterface) => {
            setMemeState(meme);
          }}
            images={imageState}
          />
        </FlexWGrow1>
        <Footer />
      </FlexHGrow3>
    </div>
  );
};

App.propTypes = {};

export default App;
