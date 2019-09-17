import React from 'react';
import PropTypes from "prop-types";

export const RocketCards = ({ rocket }) => {
  return (
    <article>
      <h1>{rocket.name}</h1>
      <p>Family:{rocket.family.name}</p>
      <a className='wiki-link' href={rocket.wikiURL}>Wiki</a>
      <a className='info-link' href={rocket.infoURL}>Info</a>
      <img className='rocket-images' alt={rocket.name} src={rocket.imageURL}></img>
    </article>
  )
}

RocketCards.propTypes = {
  rocket: PropTypes.object.isRequired
}