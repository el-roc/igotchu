import React from 'react';
import { NewsfeedHeader } from './NewsfeedHeader'
import SectionMain from './SectionMain';
import NewsFeedFilter from './NewsFeedFilter.js'
import profileImage from '../img/profileImage.jpg';
import RoundProfileImageNF from './RoundProfileImageNF'
import FeedSectionMainNF from './FeedSectionMainNF'

import UserDetails from './UserDetails'
import '../css/Newsfeed.css';
import Button from './Button';

function Newsfeed() {
  return (
  <div className="App">

        <NewsfeedHeader>Newsfeed</NewsfeedHeader>
<>
    <section className="profilePageContainer">
      <span className="profile_image_container">
        <RoundProfileImageNF username={'Tweety Bird'}  imageURL={profileImage}/>
      </span>
    </section>
    <section className='filterContainer'>
      <NewsFeedFilter/>
    </section>
    <section>
      <FeedSectionMainNF />
    </section>
</>
    </div>

  );
}

export default Newsfeed;