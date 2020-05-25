import React from 'react'
import '../css/LandingHeader.css'
import Logo from "../img/igotchu-darkblue.png";


export const LandingHeader = () => {
  return (
    <header className="landingHeader">
      <img className="landingLogo" src={Logo} alt=""/>
      <a href="/login">
        <button className="landingBtn" type="button">LOGIN</button>
      </a>
    </header>
  )
}
