import React from 'react';

import './PlaceListCard.css';

const PlaceListCard = props => {
  return (
    <div className={`PlaceListCard ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default PlaceListCard;
