import React from 'react';
import '../css/Purchase.css'
import '../css/ItemViewNewsfeed.css';
function sendMail() {
    return(
     window.open('finessejcarter@gmail.com')
    )
   }
function ItemViewNF(props){

    return (
      <section className="ItemPostNF">
          <div>
            <i class="far fa-times-circle"></i>
          </div>
          <img id="ItemImageNF" src={props.imageURL} alt="" />
          <section id="ItemTitleNF">
            <p>{props.itemName}</p>
            <span>{`$ ${props.itemPrice}`}</span>
          </section>
          <button className='Purchase' onClick={sendMail} >
     Purchase
   </button>
      </section>
    );
  }
  
  

export default ItemViewNF;
