import React from 'react';
import { Cards } from '../Cards/Cards';

export const ScheduleContainer = ({ launch }) => {
  let calendar = launch.map(launch => <Cards launch={launch} />)

  return (
      <>
      {calendar}
      </>
  )
}