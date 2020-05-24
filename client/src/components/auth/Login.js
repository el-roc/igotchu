import React, { Component } from "react";
import { Link } from "react-router-dom";

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



class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };




onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
console.log(userData);

clearTaskFromLocalStorage()
getArrayFromLocalStorage();
storeTaskInLocalStorage(userData.email)

fetch('http://localhost:5000/api/users/login', {
  method: 'POST',
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify(userData)
})
.then(res => {
  res.json()
//  if(res.json()){
//    window.location = "http://localhost:3000/profilepage"
//  }
})
.catch(error => alert(error.message));
  };




render() {
    const { errors } = this.state;
return (
      <div className="registerPage container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="logContain col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login below</b>
              </h4>
              <p className="text-darken-1">
                Don't have an account? <Link to="/">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;