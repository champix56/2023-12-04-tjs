import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';


const App=(props)=>{
  return (
    <div className="App">Demat Breizh
      <Button text="Coucou"/>
      <Button text="benjamin"/>
      <Button text="Submit"/>
      <Button text="reset"/>
    </div>
  );
}

export default App;
