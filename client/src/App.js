import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import Register from "./components/auth/Register";
import LoginPage from "./components/LoginPage";
import ProfilePage from './components/ProfilePage'
import ItemPage from './components/ItemPage';
import Newsfeed from './components/Newsfeed';
import PostForm from './components/PostForm';
import PostImg from './components/PostImg';
import UploadImg from './components/UploadImg'
import UserInfo from './components/UserInfo';
import MainHeader from './components/MainHeader';
import InputTag from './components/InputTag';
// import ItemPageHeader from './components/ItemPageHeader';
// import Footer from './components/Footer';
import NavBar from './components/NavBar.js';
import Test from './components/test.js'

class App extends Component {

  componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
}
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body;
};

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>

          <Route exact path="/" component={LandingPage} />
         
          <Route exact path="/login">
            <LoginPage/>
          </Route>

          <Route exact path="/itempage"> 
          <NavBar/>
            <ItemPage/>
          </Route>
          <Route exact path="/create"> 
            <section className = "App-top">
              <MainHeader>Create New Post</MainHeader>
            </section>
            <section className = "App-left">
              <PostImg></PostImg>
              <UploadImg></UploadImg>
            </section>
            <section className = "App-right">
              <UserInfo></UserInfo>
              <PostForm></PostForm>
              <InputTag></InputTag>
            </section>
          </Route>
          <Route exact path="/newsfeed">
          <Newsfeed />
        </Route>
         
          <Route exact path="/profilepage">
           <>
           <NavBar/>
            <ProfilePage/>
           </>
          </Route>
          <Route exact path="/test">
           <>
           <Test/>
           </>
          </Route>
          </Switch>
        </div>

      </Router>
    );
  }
}
export default App;

// 9
// import React from 'react';
// import './App.css';
// // import MailToPage from "./MailToPage";
// import LoginPage from "./LoginPage";
// import LandingPage from "./LandingPage"
// // import IndividualItemPage from "./IndividualItemPage"
// // import ItemPageSellerInfo from "./components/ItemPageSellerInfo"
// import IndividualItemImage from "./components/IndividualItemImage"
// // import IndividualItemTitle from "./components/IndividualItemTitle"
// // import ItemPageItemDescription from "./components/ItemPageItemDescription"
// // import ItemPageContactSeller from "./components/ItemPageContactSeller"
// import FeedSectionMain from './components/FeedSectionMain';
// import Footer from './components/Footer';
// // import NewsFeedFilter from './components/NewsFeedFilter';
// // import UserDetails from './components/UserDetails'
// import ProfilePage from './components/ProfilePage'
// // import ItemView from './components/ItemView'
// // import {ThemeProvider} from 'styled-components'
// // import Layout from "./layout"
// import {
//   BrowserRouter as Router,n
//   Switch,
//   Route,
//   // Link,
//   // HashRouter
// } from "react-router-dom";
// function App() {
//   return (
//     <Router>
//     <div className="App">   
//       <Switch>
//         <Route exact path="/">
//           <>
//           <LandingPage/>
//           <FeedSectionMain/>
//           <Footer/></>
//         </Route>
//         <Route exact path="/Login">
//           <IndividualItemImage />
//           <LoginPage/>
//         </Route>
//         <Route exact path="/SignUp">
//         </Route>
//         <Route exact path="/Newsfeed">
//         </Route>
//         <Route exact path="/ProfilePage">
//           <ProfilePage/>
//         </Route>
//         <Route exact path="/SellerPage">
//         </Route>
//         <Route exact path="/ItemPage">
//         </Route>
//       </Switch>
//       <div>
//         <div className="individualItemContainer">
//           <div className="leftSideIndividualItemContainer">
//             {/*<SingleItem id="5"/>*/}
//             {/* <UserDetails/> */}
//           </div>
//           <div className="rightSideIndividualItemContainer">
//           </div>
//             {/* <Footer/> */}
//           </div>
//         </div>
//       </div>
// </Router>
//   );
// }
// export default App;