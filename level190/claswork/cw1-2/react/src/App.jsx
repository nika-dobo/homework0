import { useState } from "react";

function App() {
  let name = "nika"
  let surename = "dobo"
  let age = 18

  let imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRM3RgImL_ii5R2ZVW-Smr5ANX3PQF92Iq4YJL4VxxcEo73xmSbvEWYM&s=10"

  return (
    <>
    <h1>hello my name is {name} my surname is {surename} and i am {age} years old</h1>

    <br />

    <img src={imgSrc} className="w-{300px} h-{300px}" />
    </>
  );
}

export default App;
