import React from 'react';
import { Cards } from '../Cards/Cards';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

export const ScheduleContainer = ({ monthLaunch }) => {
  let calendar = monthLaunch.map(launch => <Cards launch={launch} key={launch.id}/>)

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

ScheduleContainer.propTypes = {
  monthLaunch: PropTypes.array.isRequired
}