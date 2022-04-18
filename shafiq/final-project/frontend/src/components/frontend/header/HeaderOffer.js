import React from 'react';

const HeaderOffer = (props) => {
    const {offer, path} = props;
  return (
    <div className="w3l_offers">
        <a href={path}>{offer}</a>
    </div>
  )
}

export default HeaderOffer