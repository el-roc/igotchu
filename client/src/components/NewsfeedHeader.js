import React from 'react'
import Logo from "../img/igotchu-darkblue.png";
import '../css/NavBar.css';
import '../css/NewsfeedHeader.css'
import Button from './Button.js'
import profileImage from '../img/profileImage.jpg';


 export const NewsfeedHeader = () => {
  return (
    <div className="navBar">
      <section className="navImg">
        <img className="navLogo" src={Logo} alt='' />
      </section>
      <ul>
        <li>
          <img className="ProfileImageHeader" src={profileImage} alt="" />
        </li>
        <li>
          <a href ="/profilepage">
          <Button className="profileButton" text={'Profile'}/>
         </a>
        </li>
      
        <li>
          <a href ="/logout">
          <Button className="profileButton" text={'Logout'}/>
          </a>
        </li>
      </ul>
    </div>
  )
}

