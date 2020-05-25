import React, { Component } from 'react';
import MainHeader from './MainHeader';
import PostForm from './PostForm';
import UserInfo from './UserInfo';
import CreateHeader from './CreateHeader'

import '../css/CreatePost.css';


class CreatePost extends Component {

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     fetch('http://localhost:5000/api/posts/upload', {
    //         method: 'post',
    //         headers: {
    //           "Content-type": "application/json"
    //         },
    //         body: JSON.stringify()
    //       })
    //       .then(res => {
    //         if(res.ok){
    //           return res.json()
    //         }
    //       //  if(res.json()){
    //          // t.location = "http://localhost:3000"
    //       //  }})
    //       }).then(data => {
    //         console.log(data)
    //        this.setState(() => {
    //          return {data}
    //        })
    //       })
    //       .catch(error => alert(error.message));
    //         };

    render () {
        return (
            <>
              <section className = "App-top">
                <CreateHeader>Create New Post</CreateHeader>
              </section>
              <section className = "createContainer App-right">
                <UserInfo></UserInfo>
                <PostForm></PostForm>
              </section>
          </>
        )
    }
}

export default CreatePost