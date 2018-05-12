import React from 'react';
import './PPage.css'
import GiveCard from '../give-cards/giveCards'
import GetCard from '../get-cards/getCards'

const ProfilePage = pages => {
  return <div className="profileFrame">
  <div className="profileHeader">
    <div className="profileHeaderPictureBox">
    
    </div>
    <div className="profileHeaderInfo">
      <h1 className="profileHeaderName">jmaravilla@me.com</h1>
    </div>
  </div>
  <div className="giveGetTrackerBox">
    <p>Gives: Cooler: Beer and Soda, </p>
    <p>Gets: Snorkel Mask</p>
  </div>
  <div className="myStuffFrame">
    <h3 className="myGives">My Gives</h3>
    <div className="cardHolder">
      <GiveCard />
    </div>
    <h3 className="myGets">My Gets</h3>
    <div className="cardHolder">
      <GetCard />
    </div>
  </div>
  {/* <div className="personalInfoBox">
    <p>EXAMPLE: </p>
    <p>EXAMPLE: </p>
    <p>EXAMPLE: </p>
    <p>EXAMPLE: </p>
  </div> */}
</div>;
}

export default ProfilePage