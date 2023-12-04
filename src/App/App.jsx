import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";

const App = (props) => {
  /*
  const stateDatas = useState(0);
  const value=stateDatas[0];
  const changeStateFunction=stateDatas[1];
  */

  const [counter, setCounter] = useState(0)
  useEffect(() => {
    console.log('effect sur counter, vlue de counter :'+ counter)
  }, [counter])
  useEffect(() => {
    setCounter(-1);
    return () => {
      console.log('destruction de l\'app')
    };
  }, []);
  return (
    <div className="App">
      Valeur de counter : {counter}
      <hr />
      <Button
        text="-1"
        bgColor="skyblue"
        onButtonClick={(arg) => {
          setCounter(counter-1);
          console.log(counter);
        }}
      />
      <Button
        text="+1"
        bgColor="tomato"
        onButtonClick={() => {
          setCounter(counter-1);
          console.log(counter);
        }}
      />
    </div>
  );
};

export default App;
