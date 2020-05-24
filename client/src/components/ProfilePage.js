import React from 'react';
import ProfileFilter from './ProfileFilter.js'
import FeedSectionMain from './FeedSectionMain'
import Button from './Button.js'
import RoundProfileImage from './RoundProfileImage'
import profileImage from '../img/profileImage.jpg';
import '../css/profilePage.css';
// import UserDetails from './UserDetails'
// import ItemView from './components/ItemView'

// functional components
const  ProfilePage = () => {
    return (
      <>

        <section className="profilePageContainer">
          <span className="profile_image_container">
            <RoundProfileImage username={'Tweety Bird'}  imageURL={profileImage}/>
          </span>
          <Button className="profileButton" text={'+ Add Item'}/>
        </section>
        <section className='filterContainer'>
          <ProfileFilter/>
        </section>
        <section>
          <FeedSectionMain />
        </section>

      </>
    );
}



export default ProfilePage

