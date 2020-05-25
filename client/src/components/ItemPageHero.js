import React from 'react'
import '../css/ItemPageHero.css'
import Charmin from '../img/charminYellow.png';


export const ItemPageHero = () => {
    return (
      <section className="itempage-hero-main">
  {/* LEFT */}
      <section className="leftContainer"> 
    <div className="sellerInfoBox">
       {/* needs a img */}
       {/* <img></img> */}
       <img className="itemPicture" src={Charmin} alt="charmin" />
    </div>
    <div className="individualItemImage">
        {/* <img src={} alt=""/> */}
        {/* <img src={ToiletPaper} alt=""/> */}
        <span>Price</span>
    </div>
    <div className="contactSeller">
      <section>
        <button>
        <a href="/ContactContact"> Contact Seller </a>
        </button>
      </section>
    </div>
    </section>

    <section className="rightContainer">
    {/* RIGHT  */}
        <h2 style={{textAlign: "left"}}> Item: Toilet Paper</h2>
      <section>
        <p style={{textAlign: "left"}}>Did you run out of toilet paper? <br></br> Happy to give a free box to a low-income family. <br></br> Contact me.</p>
      </section>
    </section>
    </section>
  
    )
  }
  