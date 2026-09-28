import React from 'react'
import SayAboutme from './SayAboutme'

function Greeting(props) {
  return (
    <>
    <h1>{props.txt}</h1>
    <SayAboutme adres="tbilisi" age="18"/>
    </>
  )
}

export default Greeting