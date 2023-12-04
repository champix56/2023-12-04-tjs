import React from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";

const App = (props) => {
  return (
    <div className="App">
      Demat Breizh
      <hr />
      <Button text="Submit" bgColor="skyblue" />
      <Button text="reset" bgColor="tomato" />
    </div>
  );
};

export default App;
