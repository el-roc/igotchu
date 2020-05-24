import React from 'react';
import '../css/NavBar.css';
// import navLogo from './navLogo.png'
import Logo from "../img/igotchu-darkblue.png";
import Button from './Button.js'

function NavBar(){
  return(
    <div className="navBar">
      <section className="navImg">
        <img className="navLogo" src={Logo} alt='' />
      </section>
      <ul>
       
        
        <li>
          <a href ="/newsfeed">
          <Button className="profileButton" text={'Newsfeed'}/>
         </a>
        </li>
       
        <li>
          <a href ="/logout">
          <Button className="profileButton" text={'Logout'}/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar
