import React, {Component} from 'react';
// import Button from './Button.js'
import '../css/ItemView.css';

function ItemView(props){

    function remove (e) {
      let email = props.email
      let itemName = props.itemName
      console.log(email, itemName)

    fetch('/api/posts/remove', {
    method: 'Delete',
            headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          email,
          itemName
        })
    })

  }

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
          <button onClick={remove} className="profileButton" text={'Delete'}> Delete</button>

      </section>
    );
  }


export default ItemView;
