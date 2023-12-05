import React, { useState } from "react";
import PropTypes from "prop-types";
import FlexHGrow3 from "./components/layout/FlexHGrow3/FlexHGrow3";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexWGrow1 from "./components/layout/FlexWGrow1/FlexWGrow1";
import Footer from "./components/ui/Footer/Footer";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";
import MemeForm from "./components/feature/MemeForm/MemeForm";
import { emptyMeme, MemeInterface } from "orsys-tjs-meme";
interface IAppProps{}

const App : React.FC<IAppProps>= (props) => {
  const [memeState, setMemeState] = useState<MemeInterface>(emptyMeme)
  console.log(memeState)
  return (
    <div className="App">
      <FlexHGrow3>
        <Header />
        <Navbar />
        <FlexWGrow1>
          <MemeSvgViewer meme={memeState}/>
          <MemeForm meme={memeState}/>
        </FlexWGrow1>
        <Footer/>
      </FlexHGrow3>
    </div>
  );
};

App.propTypes = {};

export default App;
