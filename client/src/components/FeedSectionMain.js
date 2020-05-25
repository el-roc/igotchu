// Needs to be connected to route specific to user to get all of their posts


import React, {Component} from "react";
// import '..css/FeedSectionMain.css';
import ItemView from "./ItemView";
import '../css/Newsfeed.css';
import profileImage from '../uploads/logo.png';
// import Button from './Button.js'


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

  fetch('/api/posts/userPosts', {
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

    // onSubmit = e => {
    //   e.preventDefault();
    // fetch('http://localhost:5000/api/posts/remove', {
    // method: 'DELETE',
    // }
    // .then(res => res.json())
    // .catch(error => alert(error.message))
    // )}

  render (){
  return (
    <section className="board">
      <img src={'../uploads/logo.png'}></img>
      {this.state.posts.map((item, i) => {
        return  <ItemView email={this.state.email}className="cell" key={(i).toString()} itemName={item.itemName} imageURL={"https://via.placeholder.com/200"} itemPrice={item.itemPrice}/>
      

      })}
    </section>
  );
    }
}

export default FeedSectionMain;
