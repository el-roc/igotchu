import React , {Component}from 'react';
// import { useForm } from 'react-hook-form';
import '../css/PostForm.css'

class PostForm extends Component {

  state = {
    email : ''
  }
  


  componentWillMount(){
    const sanoEmail = localStorage.getItem('email');
    const email = sanoEmail.toString().replace(/"/g, "")
    this.setState(()=> {
      return {email}
    })
  }



    // const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => {

    //  data.email = email.toString().replace(/"/g, "")


    //   console.log(data);
      
    //   fetch('http://localhost:5000/api/posts/add', {
    //     method: 'POST',
    //     headers: {
    //       "Content-type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       data
    //     })
    //   })
    //   .then(res => {
    //     if(res.ok){
    //       return res.json()
    //     }
    //   })
    //   .catch(error => alert(error.message));

    // };
    // console.log(watch("form"));

    render(){
    return (
    //   <form className="postForm" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
    //     <input class= "justInputs" type="text" name="itemName" className="Title" placeholder="Item Name" />
    //     {errors.exampleRequired && <span>This field is required</span>}
    //     <br/>

    //     <input class= "justInputs" type="text" name="itemCategory" className="Title" placeholder="Item Category"  />
    //     {errors.exampleRequired && <span>This field is required</span>}
    //     <br/>

    //     <input class= "justInputs" type="text" name="itemLocation" className="Title" placeholder="Item Location"  />
    //     {errors.exampleRequired && <span>This field is required</span>}
    //     <br/> 

    //    <input class= "justInputs" type="file" name="image" className="Title" placeholder="Image URL"  />
    //     {errors.exampleRequired && <span>This field is required</span>}
    //     <br/>

    //     <input class= "justInputs" type="text" name="itemPrice" className="Title" placeholder="Image URL" />
    //     {errors.exampleRequired && <span>This field is required</span>}
    //     <br/>

    //     <textarea type="text" name="Description" className="Description" placeholder="Description" />
    //     {errors.exampleRequired && <span>This field is required</span>}
    //     <br/>
    //     <input id="button" type="submit" />
        
    //   </form>

<form method="POST" action="/api/posts/add"
enctype="multipart/form-data">
<input type="file" name="image" placeholder="Image URL"/>
<input type="text" name="itemName" placeholder="Item Name"/>
<input type="text" name="itemPrice" placeholder="Item Price"/>
<input type="text" name="itemDescription" placeholder="Item Description"/>
<input type="text" name="itemCategory"  placeholder="Item Category"/>
<input type="text" name="itemLocation" placeholder="Item Location"/>
<input type="text" name='email' value={this.state.email}/>

<input type="submit" />
</form>
    );
    }
  }
  export default PostForm;
