import React from 'react'
import Logo from "../img/igotchu-darkblue.png";
// import '../css/NavBar.css';
import '../css/NewsfeedHeader.css'
import Button from './Button.js'
import profileImage from '../img/profileImage.jpg';


 export const NewsfeedHeader = () => {
  return (
    <div className="nfBar">
      <section className="nfImg">
        <img className="nfLogo" src={Logo} alt='' />
      </section>
      <div className="pageTitle">
        Newsfeed
      </div>
      <ul className="nfUL">
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

