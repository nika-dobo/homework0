import React from 'react';
import {useState} from 'react';

function App() {
  let [ligthOnOff, setLigthOnOff] = useState("light if off");
  let [onOff, setOnOff] = useState("On");

  let [color, setColor] = useState("red");
  
  function toggleLight(){
    if(ligthOnOff == "light if off"){
      setLigthOnOff("light is on")
      setOnOff("Off")
    }
    else{
      setLigthOnOff("light is off")
      setOnOff("On")
    }
  }

  function colorChange(){
    if(color == "red"){
      setColor("blue")
    }
    else{
      setColor("red")
    }
  }

  return (
    <>
    <button onClick={toggleLight}>Turn {onOff}</button>
    <p>{ligthOnOff}</p>
    


    <p>the color is {color}</p>
    <button onClick={colorChange}>Change Color</button>
    </>
  )

}

export default App;
