import React from 'react';
import './GiveCards.css'

const GiveCard = props => {
  return <div className="giveStuffBox">
  <div className="giveStuffTitleBox">
    <h3 className="giveStuffTitle">THE THING</h3>
  </div>
  <div className="giveStuffContentMap">
    <p><img src="/assets/images/mapsample.PNG" alt="mapsample" /></p>
  </div>
  <div className="giveStuffContentBox">
    <div className="giveStuffContentText">
      <p>'Title '</p>
      <p>'Category '</p>
      <p>'Description/Contact Info '</p>
      <p>'Location '</p>
      <p>'Price '</p>
      <p>'Payment Status'</p>
    </div>
    <div className="giveStuffContentSubtextBox">
      <div className="giveStuffContentSubtext">
        <h6 className="giveStuffContentSubtextText">Contact Getter</h6>
      </div>
      <div className="giveStuffContentSubtext">
        <h6 className="giveStuffContentSubtextText">Remove Listing</h6>
      </div>      
    </div>
  </div>
</div>
}

export default GiveCard