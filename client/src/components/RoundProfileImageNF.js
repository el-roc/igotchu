import React from 'react';
import '../css/RoundProfileImage.css';

function RoundProfileImageNF(props){
  return(
    <div className="userProfile">
      <img className="roundProfileImage" src={props.imageURL} alt="user"/>
      <h3>{props.username}</h3>
    </div>
  );
}

export default RoundProfileImageNF
