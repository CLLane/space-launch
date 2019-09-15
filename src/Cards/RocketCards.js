import React from 'react';

export const RocketCards = ({ rocket }) => {
  console.log(rocket)
  return (
    <article>
      <h1>{rocket.name}</h1>
      <p>Family:{rocket.family.name}</p>
      <a href={rocket.wikiURL}>Wiki</a>
      <a href={rocket.infoURL}>Info</a>
      <img className='rocket-images' alt={rocket.name} src={rocket.imageURL}></img>
    </article>
  )
}