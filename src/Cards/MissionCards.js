import React from 'react';
import PropTypes from "prop-types";

export const MissionCard = ({ mission }) => {
  return (
    <article>
      <h1>{mission.name}</h1>
      <p>{mission.description}</p>
      <a className='info-link'href={mission.infoURL}>Info</a>
      <a className='wiki-link'href={mission.wikiURL}>Wiki</a>
    </article>
  )
}

MissionCard.propTypes = {
  mission: PropTypes.object.isRequired
}
