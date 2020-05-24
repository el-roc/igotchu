import React from 'react';
import { useForm } from 'react-hook-form';

function UploadImg() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    };
    console.log(watch("form"));
    return (
      <form enctype="multipart/form-data" method="post" onSubmit={handleSubmit(onSubmit)}>
        <input type="file" name="file-to-upload" className="Price" placeholder="Enter an amount" ref={register({ required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    );
  }
  export default UploadImg;
