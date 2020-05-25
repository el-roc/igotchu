import React from 'react';
import '../css/NewsFeedFilter.css';

function sendMail() {
 return(
  window.open('finesse')
 )
}
// window.open('mailto:test@example.com')
function ProfileFilter(){

  const filter = (e) => {
    console.log('hey')
    // let text = e.target.toLowerCase();
    // console.log(text)
  }

    return (
      <div className="mainFilter">
        <form className='FilterForm' >
            <input   onChange={(e) => filter(e)}   className="Filter" placeholder="Filter Results"></input>
            <button onClick={sendMail} >
            Purchase
            </button>
        </form>
      </div>
    );

}

export default ProfileFilter;
