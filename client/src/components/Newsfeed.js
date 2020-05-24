import React from 'react';
import { NewsfeedHeader } from './NewsfeedHeader'
import SectionMain from './SectionMain';
import NewsFeedFilter from './NewsFeedFilter.js'
import profileImage from '../img/profileImage.jpg';
import RoundProfileImage from './RoundProfileImage'
import FeedSectionMain from './FeedSectionMain'

import UserDetails from './UserDetails'
import '../css/Newsfeed.css';
import Button from './Button';

function Newsfeed() {
  return (
  <div className="App">

        <NewsfeedHeader />
<>
    <section className="profilePageContainer">
      <span className="profile_image_container">
        <RoundProfileImage username={'Tweety Bird'}  imageURL={profileImage}/>
      </span>
    </section>
    <section className='filterContainer'>
      <NewsFeedFilter/>
    </section>
    <section>
      <FeedSectionMain />
    </section>
</>
    </div>

  );
}

export default Newsfeed;