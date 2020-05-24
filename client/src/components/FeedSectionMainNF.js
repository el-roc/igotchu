// Needs to be connected to route specific to user to get all of their posts


import React, { useState, useEffect , Component} from "react";
// import '..css/FeedSectionMain.css';
import ItemViewNewsfeed from "./ItemViewNewsfeed";
import '../css/Newsfeed.css';
// import profileImage from '../img/userImage.jpg';


class FeedSectionMainNF extends Component {

state = {
  email : 'null',
  posts : []
}


componentWillMount (){

const email = localStorage.getItem('email');

this.setState(()=> {
  return {email}
})

  fetch('/posts/', {
    method: 'GET',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify()
  })
  .then(res => {
    if(res.ok){
      return res.json()
    }
  }).then(posts => {
    console.log(posts, 'response data')
   this.setState(() => {
     return {posts}
   })
  })
  .catch(error => alert(error.message));
}

  render (){
  return (
    <section className="board">
      {this.state.posts.map((item, i) => {
        return <a href="/postedItem/:id"><ItemViewNewsfeed className="cell" key={(i).toString()} itemName={item.itemName} imageURL={"https://via.placeholder.com/200"} itemPrice={item.itemPrice}/>
        </a>;
      })}
    </section>
  );
    }
}

export default FeedSectionMainNF;
