import React from "react";
import { Cards } from "../Cards/Cards";
import { connect } from "react-redux";

export const LandingContainer = ({ nextLaunch }) => {
  let landing = nextLaunch.map(launch => <Cards launch={launch} />);

  return <div className="landing-container">{landing}</div>;
};

export const mapStateToProps = ({ nextLaunch }) => ({
  nextLaunch
});

export default connect(mapStateToProps)(LandingContainer);
