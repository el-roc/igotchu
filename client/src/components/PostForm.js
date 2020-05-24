import React from 'react';
import { useForm } from 'react-hook-form';
import '../css/PostForm.css'

function PostForm() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    };
    console.log(watch("form"));
    return (
      <form className="postForm" onSubmit={handleSubmit(onSubmit)}>
        <input class= "justInputs" type="text" name="Title" className="Title" placeholder="Title" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>
        <textarea type="text" name="Description" className="Description" placeholder="Description" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>
        <input class= "justInputs" type="number" value="$" name="Price" className="Price" placeholder="Enter an amount" />
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>
        <input id="button" type="submit" />
      </form>
    );
  }
  export default PostForm;
