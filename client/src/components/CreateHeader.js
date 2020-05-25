import React from 'react'
import Logo from "../img/igotchu-darkblue.png";
import '../css/NavBar.css';
// import '../css/CreateHeader.css'
import Button from './Button.js'
import profileImage from '../img/profileImage.jpg';


const CreateHeader = () => {
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
          <a href ="/newsfeed">
            <Button className="profileButton" text={'Newsfeed'}/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default CreateHeader
