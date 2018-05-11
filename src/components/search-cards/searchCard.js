import React from 'react';
import './SearchCard.css'

const SearchCard = props => {

  return <div className="giveStuffBox">
  <div className="giveStuffTitleBox">
    <h3 className="giveStuffTitle">{ props.card.title }</h3>
  </div>
  <div className="giveStuffContentMap">
    <p>THIS IS WHERE GOOGLE MAPS GOES</p>
  </div>
  <div className="giveStuffContentBox">
    <div className="giveStuffContentText">
      <p>Type: { props.card.type.join(", ") }</p>
      <p>Description: {props.card.description} </p>
      <p>Location: {props.card.address} </p>
      <p>Price: ${props.card.price} </p>
    </div>
    <div className="giveStuffContentSubtextBox">
      <div className="giveStuffContentSubtext">
        <h6 className="giveStuffContentSubtextText">Contact Getter</h6>
      </div>
      <div className="giveStuffContentSubtext">
        <h6 className="giveStuffContentSubtextText">Claim Listing</h6>
      </div>      
    </div>
  </div>
</div>
}

export default SearchCard