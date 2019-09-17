import React from 'react';
import { Cards } from '../Cards/Cards';
import { connect } from 'react-redux';

export const ScheduleContainer = ({ monthLaunch }) => {
  let calendar = monthLaunch.map(launch => <Cards launch={launch} />)

  return (
      <>
      {calendar}
      </>
  )
}

export const mapStateToProps = ({ monthLaunch }) => ({
  monthLaunch
})

export default connect(mapStateToProps)(ScheduleContainer)