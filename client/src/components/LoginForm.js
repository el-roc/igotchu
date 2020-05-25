import React from 'react';
// import styled from 'styled-components'
import { useForm } from "react-hook-form";

 
// const LoginBtn = styled.button`
// background-color:rgb(94, 111, 211);
// color: white;
// `


function LoginForm() {


  const getArrayFromLocalStorage = () => {

    
    // iniatalize tasks variable 
    let email;
    // if the key doesnt exist
    if(localStorage.getItem('email') === null){
      email = [];
    } else {
    // else assign tasks the array from local storage
      email = JSON.parse(localStorage.getItem('email'));
    }
  
  
    return email;
  }

  const storeTaskInLocalStorage = email => {
    console.log(email, 'store')
    const emails = getArrayFromLocalStorage();
    emails.push(email)
    localStorage.setItem('email', JSON.stringify(email))
  }

  const clearTaskFromLocalStorage = () => {
    localStorage.clear();
  }

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => localStorage(data.email);
   console.log(watch("form")); 
   const localStorage =(data) =>{
    clearTaskFromLocalStorage()
     email = getArrayFromLocalStorage();
     storeTaskInLocalStorage(data)
     console.log(data)
   }

  
    return (
  <div>

      <form onSubmit={handleSubmit(onSubmit)}>
      

      <br/>
      <input
        name="email"
        ref={register({
          required: "Required",
          placeholder: "Email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      />
        
        <br/>
        <input type="password" name="password" className="password" placeholder="Password" ref={register({ required: true })} />
        
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>
     

        <input type="submit"/>
          
        

        
      </form>
  </div>
    );
  }

  export default LoginForm