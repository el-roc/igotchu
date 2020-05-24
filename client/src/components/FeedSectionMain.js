// Needs to be connected to route specific to user to get all of their posts


import React, { useState, useEffect , Component} from "react";
// import '..css/FeedSectionMain.css';
import ItemView from "./ItemView";
import '../css/Newsfeed.css';
import profileImage from '../img/profileImage.jpg';


class FeedSectionMain extends Component {

state = {
  email : 'null',
  posts : []
}


componentWillMount (){

const email = localStorage.getItem('email');

this.setState(()=> {
  return {email}
})

  fetch('/posts/userPosts', {
    method: 'Post',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      email
    })
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
        return <a href="/postedItem/:id"><ItemView className="cell" key={(i).toString()} itemName={item.itemName} imageURL={profileImage} itemPrice={item.itemPrice}/></a>;
      })}
    </section>
  );
    }
}

export default FeedSectionMain;
