import React, { Component } from 'react';
import '../css/SectionMain.css';
import ItemView from './ItemView'
import profileImage from '../img/profileImage.jpg';
// import { set } from 'mongoose';

class SectionMain extends Component {

state = {
  data : []
}

componentDidMount() {
  fetch('/posts/', {
  method: 'get',
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify()
})
.then(res => {
  if(res.ok){
    return res.json()
  }
//  if(res.json()){
   // window.location = "http://localhost:3000"
//  }})
}).then(data => {
  console.log(data)
 this.setState(() => {
   return {data}
 })
})
.catch(error => alert(error.message));
  };



  render() {
    return (
        <section className="SectionMain">

{this.state.data.map((item, i) => {
        return <a href="/postedItem/:id"><ItemView className="cell" key={i} item={item} itemName={item.itemName} itemPrice={item.itemPrice}imageURL={profileImage} /></a>;
      })}
        </section>

    );
  }
}

export default SectionMain;
