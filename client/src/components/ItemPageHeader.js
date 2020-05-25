import React from 'react'
import '../css/ItemPageHeader.css'
import Logo from "../img/igotchu-darkblue.png";


export const ItemPageHeader = () => {
  return (
    <header className="itemHeader">
      <img className="itemPageHeaderImg" src={Logo} alt=""/>
      <div>
        <button className="headerButton" type="button">Newsfeed</button>
        <button className="headerButton" type="button">Profile</button> 
      </div>

    </header>
  )
}