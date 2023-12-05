import React from "react";
import PropTypes from "prop-types";
import FlexHGrow3 from "./components/layout/FlexHGrow3/FlexHGrow3";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexWGrow1 from "./components/layout/FlexWGrow1/FlexWGrow1";
import Footer from "./components/ui/Footer/Footer";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";
import MemeForm from "./components/feature/MemeForm/MemeForm";

const App = () => {
  return (
    <div className="App">
      <FlexHGrow3>
        <Header />
        <Navbar />
        <FlexWGrow1>
          <MemeSvgViewer/>
          <MemeForm/>
        </FlexWGrow1>
        <Footer/>
      </FlexHGrow3>
    </div>
  );
};

App.propTypes = {};

export default App;
