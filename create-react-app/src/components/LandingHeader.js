import React from 'react'
import '../css/LandingHeader.css'
import Logo from "../img/igotchu-darkblue.png";


export const LandingHeader = () => {
  return (
    <header>
      <img src={Logo} alt=""/>
      <button type="button">LOGIN</button>
    </header>
  )
}
