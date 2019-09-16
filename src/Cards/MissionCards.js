import React from 'react';

export const MissionCard = ({ mission }) => {
  return (
    <article>
      <h1>{mission.name}</h1>
      <p>{mission.description}</p>
      <a href={mission.infoURL}>Info</a>
      <a href={mission.wikiURL}>Wiki</a>
    </article>
  )
}