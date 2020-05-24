import React from 'react';
import '../css/Buttons.css';

function Buttons(props){
  return(
    <div>
        <button className="button">
            {props.text}
        </button>
    </div>
  );
}

export default Buttons
