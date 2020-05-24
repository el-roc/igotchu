import React from 'react';
import '../css/NewsFeedFilter.css';

function NewsFeedFilter(){

  const filter = (e) => {
    console.log('hey')
    // let text = e.target.toLowerCase();
    // console.log(text)
  }

    return (
      <div className="mainFilter">
        <form className='FilterForm' >
        <input   onChange={(e) => filter(e)}   className="Filter" placeholder="Filter Results"></input>
        </form>
      </div>
    );

}

export default NewsFeedFilter;
