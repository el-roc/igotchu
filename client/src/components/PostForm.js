import React from 'react';
import { useForm } from 'react-hook-form';
import '../css/PostForm.css'

function PostForm() {

  const email = localStorage.getItem('email');





    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {

     data.email = email


      console.log(data);
      
      fetch('/posts/add', {
        method: 'Post',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          data
        })
      })
      .then(res => {
        if(res.ok){
          return res.json()
        }
      })
      .catch(error => alert(error.message));

    };
    console.log(watch("form"));
    return (
      <form className="postForm" onSubmit={handleSubmit(onSubmit)}>
        <input class= "justInputs" type="text" name="itemName" className="Title" placeholder="Item Name" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>

        <input class= "justInputs" type="text" name="itemCategory" className="Title" placeholder="Item Category" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>

        <input class= "justInputs" type="text" name="itemMedium" className="Title" placeholder="Item Medium" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>

        <input class= "justInputs" type="text" name="itemLocation" className="Title" placeholder="Item Location" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/> 

       <input class= "justInputs" type="text" name="boughtBuy" className="Title" placeholder="Bought Buy" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/> 

       <input class= "justInputs" type="file" name="imageURL" className="Title" placeholder="Image URL" ref={register({ required: false })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>

        <textarea type="text" name="Description" className="Description" placeholder="Description" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>
        <input id="button" type="submit" />
        
      </form>
    );
  }
  export default PostForm;
