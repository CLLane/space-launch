import React from 'react';

export const RocketCards = ({ rocket }) => {
  console.log(rocket)
  return (
    <article>
     <h1>{rocket.name}</h1>
     <p>{rocket.agencies.length}</p>
     <p>{rocket.agencies[0].countryCode}</p>
    </article>
  )
}