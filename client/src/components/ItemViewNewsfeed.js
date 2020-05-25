import React from 'react';
import '../css/Purchase.css'
import '../css/ItemViewNewsfeed.css';
import Button from './Button.js'


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
          <a href={`${props.email}`}>
            <Button className="profileButton" text={'Purchase'}/>
          </a>
      </section>
    );
  }
  
  

export default ItemViewNF;
