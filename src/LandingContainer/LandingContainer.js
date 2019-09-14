import React from 'react';
import { Cards } from '../Cards/Cards';
import { connect } from "react-redux";

const LandingContainer = ({ nextLaunch }) => {
  let landing = nextLaunch.map(launch => <Cards launch={launch} />)

  return (
    <>
      {landing}
    </>
  )
}

const mapStateToProps = ({ nextLaunch }) => ({
nextLaunch
})

export default connect(mapStateToProps)(LandingContainer)