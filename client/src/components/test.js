import React, { Component } from 'react';


class Test extends Component {

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
    //          // window.location = "http://localhost:3000"
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
<form method="POST" action="/posts/add"
enctype="multipart/form-data">
<input type="file" name="image"/>
<input type="text" name="itemName"/>
<input type="submit" />
</form>
          </>
        )
    }
}

export default Test