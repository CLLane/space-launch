import React from 'react';
import { Cards } from '../Cards/Cards';

export const LandingContainer = ({ launch }) => {
  let landing = launch.map(launch => <Cards launch={launch} />)

  return (
    <>
      {landing}
    </>
  )
}