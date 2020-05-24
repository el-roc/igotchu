import React from 'react';

import '../css/ItemView.css';

function ItemView(props){

    return (
      <section className="ItemPost">
          <div>
            <i class="far fa-times-circle"></i>
          </div>
          <img id="ItemImage" src={props.imageURL} alt="" />
          <section id="ItemTitle">
            <p>{props.itemName}</p>
            <span>{`$ ${props.itemPrice}`}</span>
          </section>
      </section>
    );
  }


export default ItemView;
